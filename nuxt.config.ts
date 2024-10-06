// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: [{path:'@/shared/icons', prefix: 'Icon'},'@/components'],

  alias:{
    css: '/<rootDir>/assets/css'
  },
  css:['@/assets/css/main.css'],
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxt/ui'],
  pinia:{
    storesDirs : ['./stores/**']
  },
  app:{
    pageTransition:{ name:'page', mode:'out-in'},
    layoutTransition:{name:'layout',mode:'out-in'}
  }
})