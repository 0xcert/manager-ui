module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '0xcert Manager',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '0xcert manager application UI.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Overpass+Mono:400,800' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3D8CFF' },
  /*
  ** Build configuration
  */
  plugins: [
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~plugins/core-components.js' },
    { src: '~plugins/date.js' }
  ],
  modules: [ 
    'nuxt-sass-resources-loader'
  ],
  css: [
    { src: '~/assets/styles/typography.scss' },
    { src: '~/assets/styles/global.scss' }
  ],
  sassResources: [
    '~/assets/styles/variables.scss'
  ],
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
