export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - ' + 'iGEM Waseda',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 
      'iGEM Wasedaは合成生物学の世界大会であるiGEMの早稲田大学代表チームです。生物「プログラミング」し、実験で検証すること地域の健康や環境問題を解決することを目標としています。普段はサークルの形で活動しており、日々サーベイや実験に励んでいます。生物系・情報系など様々な分野の学生が活躍しています。' || '' },
      { hid: 'keywords', name: 'keywords', content: '合成生物学,システム生物学,細胞生物学,生物学,春から早稲田,生物,iGEM,早稲田,早稲田大学,Waseda,waseda,サークル,環境問題,SDGs,生物ロボコン,生物オリンピック,生物プログラミング,プログラミング,ハッカー,ハッキング,ハック,バイオハック,生物をハッキング,生医,生命医科学科,電気・情報生命工学,先進理工学部,コンペ,ビジコン,アイデアコンペ,AlphaFold,DNA,DNAコンピューター,遺伝子,遺伝子プログラミング,遺伝子回路,人工遺伝子回路,モデリング,hill,ヒルの式,ミカエリス,メンテン,人工生命,細胞を創る,ALife,セル・オートマトン,ライフゲーム', },

      { hid: 'og:site_name', property: 'og:site_name', content: 'iGEM Waseda' },
      { hid: 'og:type', property: 'og:type', content: 'homepage' },
      { hid: 'og:url', property: 'og:url', content: 'https://igem-waseda.netlify.app' },
      { hid: 'og:title', property: 'og:title', content: 'iGEM Waseda' },
      { hid: 'og:description', property: 'og:description', content: 'iGEM Wasedaは合成生物学の世界大会であるiGEMの早稲田大学代表チームです。生物「プログラミング」し、実験で検証すること地域の健康や環境問題を解決することを目標としています。普段はサークルの形で活動しており、日々サーベイや実験に励んでいます。生物系・情報系など様々な分野の学生が活躍しています' },
      { hid: 'og:image', property: 'og:image', content: 'https://igem-waseda.netlify.app/images/ogp.png' },

      { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      { hid: "twitter:image", name: "twitter:image", content: 'https://igem-waseda.netlify.app/images/ogp.png' },
      { hid: "twitter:title", name: "twitter:title", content: "iGEM Waseda" },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Wasedaigem' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', extensions: ['vue'] }],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/google-analytics',
    // ...
  ],
  googleAnalytics: {
    id: 'UA-204616622-1',
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit',
    "@nuxtjs/sitemap",
  ],
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://igem-waseda.netlify.app",
  },
  markdownit: {
    preset: 'default',
    html: true,
    breaks: true,
    linkify: false,
    runtime: true,
    use: []
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
