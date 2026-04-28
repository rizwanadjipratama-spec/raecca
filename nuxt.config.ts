// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Cormorant Garamond': [300, 400, 500, 600, 700], // For elegant editorial headings
      'Inter': [300, 400, 500, 600], // For clean body text
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Raecca | Sweet BUT SHARP',
      meta: [
        { name: 'description', content: 'Authentically Indonesian Local Brand. Cruelty Free. For Every YOU.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})