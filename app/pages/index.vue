<template>
  <div class="container">
    <header class="header">
      <h1 class="title">FREMUX</h1>
      <p class="subtitle">Framework Fremux - Nuxt 4.0.0</p>
    </header>

    <nav class="navigation">
      <NuxtLink to="/" class="nav-link active">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
    </nav>

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
}

.header {
  background: linear-gradient(135deg, #00dc82, #36e4da);
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
  color: #00dc82;
}

.nav-link.active {
  background: #00dc82;
  color: white;
}

.main {
  flex: 1;
  padding: 3rem 2rem;
}

.hero {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.hero h2 {
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: #4a5568;
  margin-bottom: 3rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature h3 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.feature p {
  color: #4a5568;
  margin: 0;
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
