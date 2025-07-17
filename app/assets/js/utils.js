/**
 * Utility functions for FREMUX
 * Demonstrates JavaScript assets in Nuxt 4.x
 */

// Format date utility
export function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// Debounce utility
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Theme utilities
export const themeUtils = {
  // Get current theme
  getCurrentTheme() {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('nuxt-color-mode') || 'light'
    }
    return 'light'
  },

  // Toggle theme
  toggleTheme() {
    const current = this.getCurrentTheme()
    const newTheme = current === 'light' ? 'dark' : 'light'
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('nuxt-color-mode', newTheme)
      document.documentElement.classList.toggle('dark-mode', newTheme === 'dark')
    }
    
    return newTheme
  },

  // Apply theme
  applyTheme(theme = null) {
    const targetTheme = theme || this.getCurrentTheme()
    
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark-mode', targetTheme === 'dark')
    }
  }
}

// Animation utilities
export const animationUtils = {
  // Smooth scroll to element
  scrollToElement(selector, offset = 0) {
    const element = document.querySelector(selector)
    if (element) {
      const top = element.offsetTop - offset
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
  },

  // Fade in animation
  fadeIn(element, duration = 300) {
    element.style.opacity = '0'
    element.style.display = 'block'
    
    const start = performance.now()
    
    function animate(currentTime) {
      const elapsed = currentTime - start
      const progress = Math.min(elapsed / duration, 1)
      
      element.style.opacity = progress
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }
}

// Validation utilities
export const validationUtils = {
  // Email validation
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  // Required field validation
  isRequired(value) {
    return value !== null && value !== undefined && value.toString().trim() !== ''
  },

  // Min length validation
  minLength(value, min) {
    return value && value.toString().length >= min
  },

  // Max length validation
  maxLength(value, max) {
    return !value || value.toString().length <= max
  }
}

// API utilities
export const apiUtils = {
  // Base API URL
  baseURL: '/api',

  // Make API request
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  },

  // GET request
  get(endpoint, options = {}) {
    return this.request(endpoint, { method: 'GET', ...options })
  },

  // POST request
  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options
    })
  }
}

// Export all utilities as default
export default {
  formatDate,
  debounce,
  themeUtils,
  animationUtils,
  validationUtils,
  apiUtils
}
