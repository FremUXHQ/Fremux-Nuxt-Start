/// <reference types="nuxt" />

declare global {
  const defineAppConfig: <T>(appConfig: T) => T
}

export default defineAppConfig({
  title: 'FREMUX',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  }
})
