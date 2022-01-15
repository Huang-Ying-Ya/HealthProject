export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'healthProject',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    {
      src:'assets/css/common.less',
      lang:'less'
    },
    {
      src: 'swiper/css/swiper.css'
    },
    '@/assets/iconfont/iconfont.css',
    // '@/assets/theme/index.css' //element-ui使用第一种自动生成的方法（较复杂，内存占用大）
    { src: '~assets/css/scss/element-variables.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    {src:'@/plugins/mock',ssr:true},
    { src: "@/plugins/swiper.js", ssr: false },
    {src:'@/plugins/vue-seamless-scroll',ssr:false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    // 按需引入element-ui
    babel: {
      plugins: [
        ["component", { "libraryName": "element-ui", "styleLibraryName": "theme-chalk" }]
      ]
    },
  },
  styleResources:{
    less:[
      './assets/css/common.less'
    ]
  }
}
