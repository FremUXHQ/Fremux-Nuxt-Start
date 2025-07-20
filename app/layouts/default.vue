<template>
  <div class="layout">
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <NuxtLink to="/" class="logo-link">
            <h1>FREMUX</h1>
          </NuxtLink>
        </div>
        
        <nav class="nav">
          <NuxtLink to="/" class="nav-link">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink to="/about" class="nav-link">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">{{ $t('nav.contact') }}</NuxtLink>
        </nav>
        
        <div class="header-actions">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
    
    <main class="main">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
/* Layout Structure */
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

/* Header Styles */
.header {
  background-color: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all var(--transition-normal);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

/* Logo Styles */
.logo h1 {
  margin: 0;
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--primary-color);
}

.logo-link {
  text-decoration: none;
  transition: transform var(--transition-fast);
}

.logo-link:hover {
  transform: scale(1.05);
}

/* Navigation Styles */
.nav {
  display: flex;
  gap: var(--spacing-6);
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
  background-color: var(--bg-primary);
}

.nav-link.router-link-active {
  color: var(--primary-color);
  font-weight: 600;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background-color: var(--primary-color);
  border-radius: 1px;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

/* Main Content */
.main {
  flex: 1;
  padding: var(--spacing-4) var(--spacing-4);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    padding: 0 var(--spacing-3);
  }
  
  .nav {
    gap: var(--spacing-3);
  }
  
  .nav-link {
    padding: var(--spacing-1) var(--spacing-2);
    font-size: var(--font-size-sm);
  }
  
  .logo h1 {
    font-size: var(--font-size-lg);
  }
  
  .main {
    padding: var(--spacing-4) var(--spacing-3);
  }
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Layout transitions */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s ease;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Global styles */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus styles */
*:focus {
  outline: 2px solid #00dc82;
  outline-offset: 2px;
}

/* Loading animation */
.loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
