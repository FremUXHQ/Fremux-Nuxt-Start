// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { $fetch } from 'ofetch'

describe('$fetch composable', () => {
  it('should be available and callable', () => {
    // Verificar se o composable está disponível
    expect($fetch).toBeDefined()
    expect(typeof $fetch).toBe('function')
  })

  it('should accept string URL parameter', () => {
    // Verificar se aceita parâmetro string sem executar
    expect(() => {
      const fetchPromise = $fetch('https://api.example.com/test')
      expect(fetchPromise).toBeInstanceOf(Promise)
    }).not.toThrow()
  })

  it('should accept options object', () => {
    expect(() => {
      const fetchPromise = $fetch('https://api.example.com/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      expect(fetchPromise).toBeInstanceOf(Promise)
    }).not.toThrow()
  })

  it('should handle different HTTP methods', () => {
    const methods = ['GET', 'POST', 'PUT', 'DELETE']
    
    methods.forEach(method => {
      expect(() => {
        const fetchPromise = $fetch('https://api.example.com/test', {
          method: method as any
        })
        expect(fetchPromise).toBeInstanceOf(Promise)
      }).not.toThrow()
    })
  })

  it('should handle request body and query parameters', () => {
    expect(() => {
      const fetchPromise = $fetch('https://api.example.com/test', {
        method: 'POST',
        body: { test: 'data' },
        query: { param: 'value' }
      })
      expect(fetchPromise).toBeInstanceOf(Promise)
    }).not.toThrow()
  })
})
