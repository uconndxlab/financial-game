# financial-game

## Docker

This project includes a multi-stage Docker setup that uses Node 20 in development and builds a static site for production served by nginx.

### Development (hot reload)

Runs `nuxt` in watch mode inside a Node 20 container. Your source files are mounted, so edits reflect instantly.

```bash
# start dev server on http://localhost:3000
docker compose up web-dev

# stop
docker compose down
```

Environment variables are loaded from `.env` automatically (see `.env.example`). If file watching is slow on your platform, we already enable polling inside the container.

### Production (static, nginx)

Builds the app with `npm run generate` (Nuxt 2, ssr:false + target:static) and serves the `dist` folder with `nginx`.

```bash
# build and run production image on http://localhost:8080
docker compose --profile prod up --build web

# or just build the image
docker compose --profile prod build web

# stop
docker compose --profile prod down
```

Images/targets:
- `financial-game:dev` – Node 20, hot reload
- `financial-game:prod` – nginx serving the generated static site

Notes:
- A git client and build tools are installed in build stages to support the `uconn-banner` git dependency and any native modules.
- For SSR deployments, switch to `npm run build && nuxt start` in a Node runtime. This repo is configured for static generation (ssr:false, target:static), so nginx is optimal.
- If your build requires environment variables (e.g., `SUPABASE_URL`, `SUPABASE_KEY`), set them in your shell or `.env` file before building the production image; compose passes them as build args so they are available during `nuxt generate`.

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
