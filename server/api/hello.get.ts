export default defineEventHandler(async (event) => {
  return {
    message: 'Hello from FREMUX API!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    framework: 'Nuxt 4.0.0'
  }
})
