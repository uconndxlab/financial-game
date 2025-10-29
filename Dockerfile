# syntax=docker/dockerfile:1.6

# ---------- Base image ----------
FROM node:20-alpine AS base
WORKDIR /app

# Install runtime libs commonly needed by Node/Alpine
RUN apk add --no-cache libc6-compat

# Use npm ci when package-lock.json exists for reproducible installs
COPY package.json package-lock.json* ./

# ---------- Development image ----------
FROM base AS development
# Tools required to install git-based deps and potential native modules
RUN apk add --no-cache git python3 make g++
# Install dependencies (cached when only source changes)
RUN npm ci
# Expose Nuxt dev port
EXPOSE 3000
# Environment for file watching in containers
ENV HOST=0.0.0.0 \
    PORT=3000 \
    CHOKIDAR_USEPOLLING=true
# Default command for dev (can be overridden by docker-compose)
CMD ["npm","run","dev"]

# ---------- Build image (production build) ----------
FROM base AS builder
RUN apk add --no-cache git python3 make g++
# Install dependencies
RUN npm ci
# Copy the rest of the source
COPY . .

# Build static site (Nuxt2 with ssr:false + target:static)
# Allow passing runtime config needed at build time (e.g., Supabase)
ARG SUPABASE_URL
ARG SUPABASE_KEY
ENV SUPABASE_URL=${SUPABASE_URL} \
    SUPABASE_KEY=${SUPABASE_KEY}
RUN npm run generate

# ---------- Production image (nginx) ----------
FROM nginx:1.27-alpine AS production
WORKDIR /usr/share/nginx/html
# Copy custom nginx config for SPA routing and caching
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy generated static site
COPY --from=builder /app/dist .

# Nginx default port
EXPOSE 80
# Healthcheck (optional)
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -qO- http://localhost/ || exit 1

# No CMD needed; nginx base image defines it