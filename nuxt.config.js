
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
 
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    [
    '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDys0--HcPNMMxZmdnIF99IvM9SkXwkVnk',
          authDomain: 'vue-pwa-withapi.firebaseapp.com',
          databaseURL: 'https://vue-pwa-withapi.firebaseio.com',
          projectId: 'vue-pwa-withapi',
          storageBucket: 'vue-pwa-withapi.appspot.com',
          messagingSenderId: '678690413997',
          appId: '1:678690413997:web:86e76ff4b770ab64259524',
          measurementId: 'G-ZGP9236XTY'
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
    
  }
  
}

