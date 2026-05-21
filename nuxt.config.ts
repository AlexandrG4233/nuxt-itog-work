export default {
  css: [
    './styles/styles.less'
  ],
  
  app: {
    head: {
      title: 'Lenni Art',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no' },
        { name: 'description', content: 'Арт-пространство для людей, горящих сердцем и делом' },
        { name: 'theme-color', content: '#dedede' },
        { name: 'msapplication-TileColor', content: '#dedede' },
        { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap' },
        // Фавиконки
        { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-icon-192x192.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-touch-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-touch-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-touch-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-touch-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon-180x180.png' },
        { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#bc3324' },
        { rel: 'manifest', href: '/favicons/site.webmanifest' }
      ]
    }
  },
  
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `
            @import "./styles/global/variables.less";
            @import "./styles/global/mixins.less";
          `
        }
      }
    }
  }
}