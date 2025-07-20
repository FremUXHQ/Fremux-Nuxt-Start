<template>
  <div class="container">
    <header class="header">
      <h1 class="title">{{ $t('contact.title') }}</h1>
      <p class="subtitle">{{ $t('contact.description') }}</p>
    </header>

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
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color var(--transition-normal), color var(--transition-normal);
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



.main {
  flex: 1;
  padding: 3rem 2rem;
  background: var(--bg-primary);
  transition: background-color var(--transition-normal);
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
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: background-color var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}

.contact-info h2, .contact-form h2 {
  color: var(--text-primary);
  margin-bottom: 2rem;
  font-size: 1.5rem;
  transition: color var(--transition-normal);
}

.contact-item {
  margin-bottom: 1.5rem;
}

.contact-item h3 {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  transition: color var(--transition-normal);
}

.contact-item p {
  color: var(--text-primary);
  font-weight: 500;
  margin: 0;
  transition: color var(--transition-normal);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
  transition: color var(--transition-normal);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: border-color var(--transition-fast), background-color var(--transition-normal), color var(--transition-normal);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px var(--primary-color-alpha);
}

.submit-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.submit-btn:hover:not(:disabled) {
  background: var(--primary-color-hover);
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
  transition: background-color var(--transition-normal), color var(--transition-normal), border-color var(--transition-normal);
}

.submit-message.success {
  background: var(--success-bg);
  color: var(--success-text);
  border: 1px solid var(--success-border);
}

.submit-message.error {
  background: var(--error-bg);
  color: var(--error-text);
  border: 1px solid var(--error-border);
}

.footer {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  text-align: center;
  padding: 1.5rem;
  border-top: 1px solid var(--border-color);
  transition: background-color var(--transition-normal), color var(--transition-normal), border-color var(--transition-normal);
}

.footer p {
  margin: 0;
}
</style>
