<template>
  <div class="container">
    <header class="header">
      <h1 class="title">FREMUX</h1>
      <p class="subtitle">Framework Fremux - Nuxt 4.0.0</p>
    </header>

    <main class="main">
      <section class="hero">
        <h2>Bem-vindo ao FREMUX</h2>
        <p>Framework moderno baseado em Nuxt 4.0.0 com arquitetura completa e otimizada.</p>
        
        <div class="features">
          <div class="feature">
            <h3>⚡ Performance</h3>
            <p>Vite + Nitro para builds ultra-rápidos</p>
          </div>
          <div class="feature">
            <h3>🎯 TypeScript</h3>
            <p>Tipagem completa com project references</p>
          </div>
          <div class="feature">
            <h3>🚀 Deploy</h3>
            <p>Multiplataforma com Nitro</p>
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
</style>
