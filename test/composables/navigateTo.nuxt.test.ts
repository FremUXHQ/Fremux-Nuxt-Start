// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { navigateTo } from '#imports'

describe('navigateTo composable', () => {
  it('should be available and callable', () => {
    // Verificar se o composable está disponível
    expect(navigateTo).toBeDefined()
    expect(typeof navigateTo).toBe('function')
  })

  it('should accept string path without errors', () => {
    expect(() => {
      navigateTo('/about')
    }).not.toThrow()
  })

  it('should accept object route without errors', () => {
    expect(() => {
      navigateTo({
        path: '/contact',
        query: { tab: 'info' }
      })
    }).not.toThrow()
  })

  it('should accept external URL without errors', () => {
    expect(() => {
      navigateTo('https://nuxt.com', { external: true })
    }).not.toThrow()
  })

  it('should handle replace option without errors', () => {
    expect(() => {
      navigateTo('/about', { replace: true })
    }).not.toThrow()
  })
})
