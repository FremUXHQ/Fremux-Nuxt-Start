<template>
  <div class="container">
    <header class="header">
      <h1 class="title">FREMUX</h1>
      <p class="subtitle">{{ $t('home.subtitle') }}</p>
    </header>

    <main class="main">
      <section class="hero" :style="{ backgroundImage: 'url(' + heroBg + ')' }">
        <div class="hero-content">
          <img :src="logo" alt="FREMUX Logo" class="hero-logo" />
          <h2>{{ $t('home.title') }}</h2>
          <p>{{ $t('home.description') }}</p>
        </div>
      </section>

      <section class="features">
        <div class="feature">
          <img :src="homeIcon" alt="Home" class="feature-icon" />
          <h3>⚡ Performance</h3>
          <p>Vite + Nitro para builds ultra-rápidos</p>
        </div>
        <div class="feature">
          <img :src="userIcon" alt="User" class="feature-icon" />
          <h3>🎯 TypeScript</h3>
          <p>Tipagem completa com project references</p>
        </div>
        <div class="feature">
          <img :src="settingsIcon" alt="Settings" class="feature-icon" />
          <h3>🚀 Deploy</h3>
          <p>Multiplataforma com Nitro</p>
        </div>
      </section>

      <section class="assets-demo">
        <h2>Demonstração de Assets</h2>
        <div class="assets-grid">
          <div class="asset-item">
            <h4>Logo SVG</h4>
            <img :src="logo" alt="Logo" class="demo-asset" />
            <code>~/assets/images/logo.svg</code>
          </div>
          <div class="asset-item">
            <h4>Ícones</h4>
            <div class="icons-demo">
              <img :src="homeIcon" alt="Home" class="demo-icon" />
              <img :src="userIcon" alt="User" class="demo-icon" />
              <img :src="mailIcon" alt="Mail" class="demo-icon" />
              <img :src="settingsIcon" alt="Settings" class="demo-icon" />
            </div>
            <code>~/assets/images/icons/</code>
          </div>
          <div class="asset-item">
            <h4>Utilitários JS</h4>
            <p>Data formatada: {{ formattedDate }}</p>
            <button @click="toggleDemo" class="demo-button">Testar Debounce</button>
            <code>~/assets/js/utils.js</code>
          </div>
        </div>
      </section>

      <!-- Nuxt Modules Demo -->
      <section class="modules-demo">
        <h2>Demonstração @nuxt/image e @nuxt/icon</h2>
        <div class="modules-grid">
          <div class="module-item">
            <h4>@nuxt/image - Otimização Automática</h4>
            <NuxtImg 
              src="/images/demo-image.svg" 
              alt="Imagem de demonstração"
              width="400"
              height="200"
              loading="lazy"
              class="demo-image"
            />
            <p>Lazy loading, responsive, otimizada</p>
          </div>
          <div class="module-item">
            <h4>@nuxt/icon - Ícones Dinâmicos</h4>
            <div class="icon-showcase">
              <ClientOnly>
                <Icon name="heroicons:home" size="32" />
                <Icon name="heroicons:user" size="32" />
                <Icon name="heroicons:envelope" size="32" />
                <Icon name="heroicons:cog-6-tooth" size="32" />
                <Icon name="heroicons:heart" size="32" color="red" />
                <template #fallback>
                  <div>Carregando ícones...</div>
                </template>
              </ClientOnly>
            </div>
            <p>Ícones Heroicons integrados</p>
          </div>
        </div>
      </section>

      <!-- Assets Demo -->
      <section class="assets-demo">
        <h2>Recursos Estáticos</h2>
        <div class="assets-grid">
          <div class="asset-item">
            <h4>Logo SVG</h4>
            <img :src="logo" alt="Logo FREMUX" class="demo-logo" />
            <code>~/assets/images/logo.svg</code>
          </div>
          <div class="asset-item">
            <h4>Ícones Customizados</h4>
            <div class="icons-row">
              <img :src="homeIcon" alt="Home" class="icon" />
              <img :src="userIcon" alt="User" class="icon" />
              <img :src="mailIcon" alt="Mail" class="icon" />
              <img :src="settingsIcon" alt="Settings" class="icon" />
            </div>
            <code>~/assets/images/icons/</code>
          </div>
          <div class="asset-item">
            <h4>Utilitários JS</h4>
            <p>Data formatada: {{ formattedDate }}</p>
            <button @click="toggleDemo" class="demo-button">Testar Debounce</button>
            <code>~/assets/js/utils.js</code>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 FREMUX - devLaboware</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { formatDate, debounce } from '~/assets/js/utils.js'

// Import assets
import logo from '~/assets/images/logo.svg'
import heroBg from '~/assets/images/hero-bg.svg'
import homeIcon from '~/assets/images/icons/home.svg'
import userIcon from '~/assets/images/icons/user.svg'
import mailIcon from '~/assets/images/icons/mail.svg'
import settingsIcon from '~/assets/images/icons/settings.svg'

// Reactive data
const demoCounter = ref(0)

// Computed properties
const formattedDate = computed(() => {
  return formatDate(new Date())
})

// Debounced function for demo
const debouncedIncrement = debounce(() => {
  demoCounter.value++
  console.log('Debounced increment:', demoCounter.value)
}, 500)

// Methods
const toggleDemo = () => {
  debouncedIncrement()
}

// Lifecycle
onMounted(() => {
  console.log('Assets demo page mounted')
  console.log('Current date:', formattedDate.value)
})
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
  background: linear-gradient(135deg, var(--primary-color), #36e4da);
  color: white;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 3rem;
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
  background-color: var(--bg-primary);
  transition: background-color var(--transition-normal);
}

.hero {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.hero h2 {
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  transition: color var(--transition-normal);
}

.hero p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  transition: color var(--transition-normal);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-fast), background-color var(--transition-normal), box-shadow var(--transition-normal);
  border: 1px solid var(--border-color);
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.feature h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  transition: color var(--transition-normal);
}

.feature p {
  color: var(--text-secondary);
  margin: 0;
  transition: color var(--transition-normal);
}

.footer {
  background: var(--bg-secondary);
  color: var(--text-primary);
  text-align: center;
  padding: 1.5rem;
  border-top: 1px solid var(--border-color);
  transition: background-color var(--transition-normal), color var(--transition-normal), border-color var(--transition-normal);
}

.footer p {
  margin: 0;
}

/* Modules Demo Section */
.modules-demo {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.modules-demo h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 3rem;
  font-size: 2rem;
  transition: color var(--transition-normal);
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
}

.module-item {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  text-align: center;
  transition: transform var(--transition-fast), background-color var(--transition-normal);
}

.module-item:hover {
  transform: translateY(-5px);
}

.module-item h4 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  transition: color var(--transition-normal);
}

.demo-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: var(--shadow-sm);
}

.icon-showcase {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;
}

.icon-showcase svg {
  transition: transform var(--transition-fast);
}

.icon-showcase svg:hover {
  transform: scale(1.2);
}

/* Hero section with background */
.hero {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 2rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
}

.hero-logo {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.hero h2 {
  color: white !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero p {
  color: rgba(255, 255, 255, 0.9) !important;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* Feature icons */
.feature-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

/* Assets demo section */
.assets-demo {
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 1rem;
  border: 1px solid var(--border-color);
}

.assets-demo h2 {
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 2rem;
}

.assets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.asset-item {
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  text-align: center;
}

.asset-item h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.demo-asset {
  width: 60px;
  height: 60px;
  margin: 1rem 0;
}

.icons-demo {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.demo-icon {
  width: 24px;
  height: 24px;
  color: var(--primary-color);
}

.demo-button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 1rem 0;
  transition: background-color var(--transition-fast);
}

.demo-button:hover {
  background: var(--primary-dark);
}

.asset-item code {
  display: block;
  background: var(--bg-secondary);
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 1rem;
}

.asset-item p {
  color: var(--text-secondary);
  margin: 0.5rem 0;
}
</style>
