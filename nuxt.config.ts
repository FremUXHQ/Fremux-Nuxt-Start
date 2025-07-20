/// <reference types="nuxt" />
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  modules: [
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/icon'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  // Image optimization configuration
  image: {
    format: ['webp', 'avif', 'png', 'jpg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // Internationalization configuration
  i18n: {
    defaultLocale: 'pt',
    langDir: 'locales',
    locales: [
      {
        code: 'pt',
        name: 'Português',
        file: 'pt.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in'
    }
  }
})
