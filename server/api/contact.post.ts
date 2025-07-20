export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  // Validate required fields
  const requiredFields = ['name', 'email', 'subject', 'message']
  const missingFields = requiredFields.filter(field => !body[field])
  
  if (missingFields.length > 0) {
    throw createError({
      statusCode: 400,
      statusMessage: `Missing required fields: ${missingFields.join(', ')}`
    })
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email format'
    })
  }
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // In a real application, you would:
  // - Save to database
  // - Send email notification
  // - Log the contact attempt
  
  return {
    success: true,
    message: 'Mensagem enviada com sucesso!',
    data: {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      subject: body.subject
    }
  }
})
