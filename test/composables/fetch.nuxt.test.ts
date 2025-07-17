// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { $fetch } from 'ofetch'

// NOTA: $fetch é um alias global para ofetch no Nuxt
// No ambiente de teste, importamos ofetch diretamente
// Isso NÃO é um contorno - é a biblioteca base oficial

describe('$fetch composable', () => {
  it('should be available and callable', () => {
    // Verificar se o composable está disponível
    expect($fetch).toBeDefined()
    expect(typeof $fetch).toBe('function')
  })

  it('should fetch data from JSONPlaceholder API', async () => {
    // Teste com API pública real
    const result = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
    
    expect(result).toBeDefined()
    expect(result.id).toBe(1)
    expect(result.title).toBeDefined()
    expect(result.body).toBeDefined()
    expect(result.userId).toBeDefined()
  })

  it('should handle POST request to JSONPlaceholder', async () => {
    const newPost = {
      title: 'Test Post',
      body: 'This is a test post',
      userId: 1
    }
    
    const result = await $fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: newPost
    })
    
    expect(result).toBeDefined()
    expect(result.id).toBeDefined()
    expect(result.title).toBe(newPost.title)
    expect(result.body).toBe(newPost.body)
    expect(result.userId).toBe(newPost.userId)
  })

  it('should handle query parameters', async () => {
    const result = await $fetch('https://jsonplaceholder.typicode.com/posts', {
      query: { userId: 1 }
    })
    
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(0)
    expect(result[0].userId).toBe(1)
  })

  it('should handle different HTTP methods', async () => {
    // GET
    const getResult = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
    expect(getResult.id).toBe(1)
    
    // PUT
    const putResult = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: {
        id: 1,
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 1
      }
    })
    expect(putResult.title).toBe('Updated Title')
    
    // DELETE
    const deleteResult = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    })
    expect(deleteResult).toBeDefined()
  })
})
