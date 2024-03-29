export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Breadwinner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/ct-breadwinner-plain.svg' }],
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-YH6R1Q2SB7', async: true },
      { src: '/ga.js' }
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/money.js',
    '~/plugins/persistedState.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',

    // Vuetify: https://github.com/nuxt-community/vuetify-module#readme
    ['@nuxtjs/vuetify', {
      theme: {
        options: {
          customProperties: true,
        },
        dark: true,
        themes: {
            dark: {
                primary: '#5ed1c7',
                secondary: '#173349'
            }
        }
      }
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    // https://github.com/supabase-community/nuxt-supabase
    ['nuxt-supabase', {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }],
    // https://github.com/schlunsen/nuxt-leaflet
    'nuxt-leaflet',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    // Don't need icon when using SVG file
    icon: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
}
