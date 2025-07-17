<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Contato</h1>
      <p class="subtitle">Entre em contato conosco</p>
    </header>

    <nav class="navigation">
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      <NuxtLink to="/contact" class="nav-link active">Contact</NuxtLink>
    </nav>

    <main class="main">
      <section class="content">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Informações de Contato</h2>
            
            <div class="contact-item">
              <h3>📧 Email</h3>
              <p>devops@laboware.com.br</p>
            </div>

            <div class="contact-item">
              <h3>🏢 Empresa</h3>
              <p>devLaboware</p>
            </div>

            <div class="contact-item">
              <h3>🌐 Projeto</h3>
              <p>FREMUX - Framework Nuxt 4.0.0</p>
            </div>

            <div class="contact-item">
              <h3>📋 Status</h3>
              <p>Em desenvolvimento ativo</p>
            </div>
          </div>

          <div class="contact-form">
            <h2>Envie uma Mensagem</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Nome:</label>
                <input 
                  id="name" 
                  v-model="form.name" 
                  type="text" 
                  required 
                  placeholder="Seu nome"
                >
              </div>

              <div class="form-group">
                <label for="email">Email:</label>
                <input 
                  id="email" 
                  v-model="form.email" 
                  type="email" 
                  required 
                  placeholder="seu@email.com"
                >
              </div>

              <div class="form-group">
                <label for="subject">Assunto:</label>
                <input 
                  id="subject" 
                  v-model="form.subject" 
                  type="text" 
                  required 
                  placeholder="Assunto da mensagem"
                >
              </div>

              <div class="form-group">
                <label for="message">Mensagem:</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  rows="5"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
              </button>
            </form>

            <div v-if="submitMessage" class="submit-message" :class="submitStatus">
              {{ submitMessage }}
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 FREMUX - devLaboware</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Reactive form data using Nuxt 4.x auto-imports
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitStatus = ref('')

// Email validation function
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Form submission handler
const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  // Frontend validation
  if (!form.name.trim()) {
    submitMessage.value = 'Nome é obrigatório'
    submitStatus.value = 'error'
    isSubmitting.value = false
    return
  }
  
  if (!form.email.trim()) {
    submitMessage.value = 'Email é obrigatório'
    submitStatus.value = 'error'
    isSubmitting.value = false
    return
  }
  
  if (!isValidEmail(form.email)) {
    submitMessage.value = 'Formato de email inválido'
    submitStatus.value = 'error'
    isSubmitting.value = false
    return
  }
  
  if (!form.subject.trim()) {
    submitMessage.value = 'Assunto é obrigatório'
    submitStatus.value = 'error'
    isSubmitting.value = false
    return
  }
  
  if (!form.message.trim()) {
    submitMessage.value = 'Mensagem é obrigatória'
    submitStatus.value = 'error'
    isSubmitting.value = false
    return
  }
  
  try {
    // Call real API endpoint
    const data = await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    
    // Reset form on success
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
    
    submitMessage.value = data?.message || 'Mensagem enviada com sucesso!'
    submitStatus.value = 'success'
    
    // Clear message after 3 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 3000)
    
  } catch (error: any) {
    submitMessage.value = error.data?.message || 'Erro ao enviar mensagem. Tente novamente.'
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  margin: 0.5rem 0 0 0;
  opacity: 0.9;
}

.navigation {
  background: #f8f9fa;
  padding: 1rem 2rem;
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid #e9ecef;
}

.nav-link {
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: #e9ecef;
  color: #f5576c;
}

.nav-link.active {
  background: #f5576c;
  color: white;
}

.main {
  flex: 1;
  padding: 3rem 2rem;
  background: #f8f9fa;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

.contact-info, .contact-form {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.contact-info h2, .contact-form h2 {
  color: #2d3748;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.contact-item {
  margin-bottom: 1.5rem;
}

.contact-item h3 {
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.contact-item p {
  color: #2d3748;
  font-weight: 500;
  margin: 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2d3748;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #f5576c;
  box-shadow: 0 0 0 3px rgba(245, 87, 108, 0.1);
}

.submit-btn {
  background: #f5576c;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #e74c3c;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
}

.submit-message.success {
  background: #c6f6d5;
  color: #22543d;
  border: 1px solid #9ae6b4;
}

.submit-message.error {
  background: #fed7d7;
  color: #c53030;
  border: 1px solid #feb2b2;
}

.footer {
  background: #2d3748;
  color: white;
  text-align: center;
  padding: 1.5rem;
}

.footer p {
  margin: 0;
}
</style>
