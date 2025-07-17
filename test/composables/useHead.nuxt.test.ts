// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { useHead } from '#imports'

describe('useHead composable', () => {
  it('should be available and callable', () => {
    // Verificar se o composable está disponível
    expect(useHead).toBeDefined()
    expect(typeof useHead).toBe('function')
  })

  it('should accept title configuration without errors', () => {
    // Verificar se pode ser chamado sem erros
    expect(() => {
      useHead({
        title: 'Test Page Title'
      })
    }).not.toThrow()
  })

  it('should accept meta configuration without errors', () => {
    expect(() => {
      useHead({
        meta: [
          { name: 'description', content: 'Test description' }
        ]
      })
    }).not.toThrow()
  })

  it('should accept reactive configuration without errors', async () => {
    const { ref } = await import('vue')
    
    const title = ref('Initial Title')
    
    expect(() => {
      useHead({
        title: () => title.value
      })
    }).not.toThrow()
    
    // Alterar valor reativo
    title.value = 'Updated Title'
    
    // Verificar que não há erros
    expect(title.value).toBe('Updated Title')
  })
})
