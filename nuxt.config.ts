// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  $meta: {
    title: "Facing Climate Change",
  },
  build: {
    transpile: ['vuetify'],
  },
  css: ["~/assets/style.css","vuetify/lib/styles/main.sass"],
  modules: [
    '@nuxt/content',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  devtools: false,
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  },
})
