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
      'Pacifico': [400], // For bubbly script
      'Fredoka': [500, 600, 700], // For rounded bubbly sans
    },
    display: 'swap',
  },

  app: {
    head: {
      title: 'Raecca Cosmetics | Sweet BUT SHARP - Premium Local Liptint',
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { name: 'description', content: 'Raecca Cosmetics: Brand kosmetik lokal Indonesia yang mengusung konsep Sweet BUT SHARP. Dapatkan Glow Up Tint tahan lama, transferproof, dengan hasil akhir glossy elegan untuk segala warna kulit.' },
        { name: 'keywords', content: 'Raecca, Raecca cosmetics, liptint lokal, glow up tint, kosmetik indonesia, lip tint tahan lama, lip gloss, makeup halal, cruelty free, vegan makeup, sweet but sharp' },
        { property: 'og:title', content: 'Raecca Cosmetics | Premium Local Liptint' },
        { property: 'og:description', content: 'Dapatkan Glow Up Tint tahan lama, transferproof, dengan hasil akhir glossy elegan untuk segala warna kulit. Authentically Indonesian.' },
        { property: 'og:image', content: '/images/products/hero-liptint-2.png' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Raecca Cosmetics | Sweet BUT SHARP' },
        { name: 'twitter:description', content: 'Dapatkan Glow Up Tint tahan lama, transferproof, dengan hasil akhir glossy elegan.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://raecca.vercel.app' }
      ]
    }
  }
})