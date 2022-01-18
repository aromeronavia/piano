export default {
  ssr: false,
  target: 'static',
  buildDir: 'dist',
  generate: {
    fallback: "404.html"
  },
  head: {
    title: 'Piano Keyboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Use a piano keyboard to reproduce music sounds from multiple instruments!' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    link: [{ rel: "preconnect", href: "https://fonts.gstatic.com" }],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
      },
    ],
  },
  buildDir: "nuxt-dist",
  buildModules: ['@nuxtjs/tailwindcss'],
}
