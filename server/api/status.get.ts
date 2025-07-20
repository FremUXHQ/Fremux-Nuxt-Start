export default defineEventHandler(async (event) => {
  const startTime = Date.now()
  
  // Simulate some processing
  await new Promise(resolve => setTimeout(resolve, 10))
  
  const endTime = Date.now()
  
  return {
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    responseTime: `${endTime - startTime}ms`,
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    framework: {
      name: 'Nuxt',
      version: '4.0.0'
    },
    server: {
      engine: 'Nitro',
      platform: process.platform,
      nodeVersion: process.version
    }
  }
})
