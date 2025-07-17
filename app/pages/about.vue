<template>
  <div class="container">
    <header class="header">
      <h1 class="title">{{ $t('about.title') }}</h1>
      <p class="subtitle">{{ $t('about.description') }}</p>
    </header>

    <main class="main">
      <section class="content">
        <div class="info-grid">
          <div class="info-card">
            <h2>🏗️ Arquitetura</h2>
            <ul>
              <li><strong>Core Engine:</strong> Nuxt 4.0.0</li>
              <li><strong>Bundler:</strong> Vite (ultra-rápido)</li>
              <li><strong>Server:</strong> Nitro (universal)</li>
              <li><strong>CLI:</strong> Nuxi (otimizado)</li>
              <li><strong>DevKit:</strong> @nuxt/kit</li>
            </ul>
          </div>

          <div class="info-card">
            <h2>🎯 Características</h2>
            <ul>
              <li>TypeScript com project references</li>
              <li>Hot Module Replacement (HMR)</li>
              <li>Server-Side Rendering (SSR)</li>
              <li>Static Site Generation (SSG)</li>
              <li>DevTools integrado</li>
            </ul>
          </div>

          <div class="info-card">
            <h2>📊 Status do Projeto</h2>
            <div class="status-item">
              <span class="status-label">Configuration:</span>
              <span class="status-badge complete">✅ Completo</span>
            </div>
            <div class="status-item">
              <span class="status-label">Assets:</span>
              <span class="status-badge partial">⚠️ Parcial</span>
            </div>
            <div class="status-item">
              <span class="status-label">Routing:</span>
              <span class="status-badge complete">✅ Implementando</span>
            </div>
            <div class="status-item">
              <span class="status-label">Styling:</span>
              <span class="status-badge partial">⚠️ Parcial</span>
            </div>
            <div class="status-item">
              <span class="status-label">Testing:</span>
              <span class="status-badge pending">❌ Pendente</span>
            </div>
          </div>

          <div class="info-card">
            <h2>🚀 Próximos Passos</h2>
            <ol>
              <li>Implementar sistema de styling completo</li>
              <li>Configurar testing com Vitest</li>
              <li>Criar API routes para data fetching</li>
              <li>Implementar transitions entre páginas</li>
              <li>Configurar layers se necessário</li>
            </ol>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2025 FREMUX - devLaboware</p>
    </footer>
  </div>
</template>

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
  background: linear-gradient(135deg, #667eea, #764ba2);
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

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-fast), background-color var(--transition-normal), box-shadow var(--transition-normal);
  border: 1px solid var(--border-color);
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.info-card h2 {
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  transition: color var(--transition-normal);
}

.info-card ul, .info-card ol {
  color: var(--text-secondary);
  line-height: 1.6;
  transition: color var(--transition-normal);
}

.info-card li {
  margin-bottom: 0.5rem;
}

.status-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
  transition: border-color var(--transition-normal);
}

.status-label {
  font-weight: 500;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.status-badge.complete {
  background: #c6f6d5;
  color: #22543d;
}

.status-badge.partial {
  background: #fef5e7;
  color: #c05621;
}

.status-badge.pending {
  background: #fed7d7;
  color: #c53030;
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
