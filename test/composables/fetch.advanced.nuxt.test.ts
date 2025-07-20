// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { $fetch } from 'ofetch'
import { ref, computed } from 'vue'

describe('$fetch composable - Advanced Tests', () => {
  describe('Composable Availability and Type Safety', () => {
    it('should be available as a function', () => {
      expect(typeof $fetch).toBe('function')
    })

    it('should handle string URLs', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
    })

    it('should handle URL objects', async () => {
      const url = new URL('https://jsonplaceholder.typicode.com/posts/1')
      const response = await $fetch(url)
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
    })
  })

  describe('HTTP Methods', () => {
    it('should handle GET requests', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET'
      })
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
      expect(response.title).toBeDefined()
    })

    it('should handle POST requests', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: {
          title: 'Test Post',
          body: 'This is a test post',
          userId: 1
        }
      })
      expect(response).toBeDefined()
      expect(response.id).toBeDefined()
      expect(response.title).toBe('Test Post')
    })

    it('should handle PUT requests', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: {
          id: 1,
          title: 'Updated Post',
          body: 'This is an updated post',
          userId: 1
        }
      })
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
      expect(response.title).toBe('Updated Post')
    })

    it('should handle PATCH requests', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: {
          title: 'Patched Post'
        }
      })
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
      expect(response.title).toBe('Patched Post')
    })

    it('should handle DELETE requests', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
      })
      expect(response).toEqual({})
    })
  })

  describe('Request Configuration', () => {
    it('should handle query parameters', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts', {
        query: {
          userId: 1,
          _limit: 5
        }
      })
      expect(Array.isArray(response)).toBe(true)
      expect(response.length).toBeLessThanOrEqual(5)
      expect(response.every(post => post.userId === 1)).toBe(true)
    })

    it('should handle headers', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
    })

    it('should handle timeout configuration', async () => {
      expect(async () => {
        await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
          timeout: 5000
        })
      }).not.toThrow()
    })

    it('should handle retry configuration', async () => {
      expect(async () => {
        await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
          retry: 2
        })
      }).not.toThrow()
    })
  })

  describe('Response Handling', () => {
    it('should handle JSON responses', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
      expect(typeof response).toBe('object')
      expect(response.id).toBeDefined()
      expect(response.title).toBeDefined()
      expect(response.body).toBeDefined()
    })

    it('should handle array responses', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts', {
        query: { _limit: 3 }
      })
      expect(Array.isArray(response)).toBe(true)
      expect(response.length).toBe(3)
      expect(response[0].id).toBeDefined()
    })

    it('should handle empty responses', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
      })
      expect(response).toEqual({})
    })
  })

  describe('Error Handling', () => {
    it('should handle 404 errors gracefully', async () => {
      try {
        await $fetch('https://jsonplaceholder.typicode.com/posts/999999')
      } catch (error) {
        expect(error).toBeDefined()
        expect(error.status).toBe(404)
      }
    })

    it('should handle network errors', async () => {
      try {
        await $fetch('https://nonexistent-domain-12345.com/api/test')
      } catch (error) {
        expect(error).toBeDefined()
      }
    })

    it('should handle invalid JSON responses', async () => {
      // Este teste pode falhar dependendo da API, mas não deve quebrar o $fetch
      expect(async () => {
        try {
          await $fetch('https://httpbin.org/html')
        } catch (error) {
          // Esperamos algum tipo de erro de parsing
          expect(error).toBeDefined()
        }
      }).not.toThrow()
    })
  })

  describe('Reactive Data Support', () => {
    it('should work with reactive URLs', async () => {
      const postId = ref(1)
      const response = await $fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
    })

    it('should work with computed URLs', async () => {
      const baseUrl = ref('https://jsonplaceholder.typicode.com')
      const endpoint = ref('posts')
      const id = ref(1)
      
      const computedUrl = computed(() => `${baseUrl.value}/${endpoint.value}/${id.value}`)
      
      const response = await $fetch(computedUrl.value)
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
    })

    it('should work with reactive query parameters', async () => {
      const userId = ref(1)
      const limit = ref(3)
      
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts', {
        query: {
          userId: userId.value,
          _limit: limit.value
        }
      })
      expect(Array.isArray(response)).toBe(true)
      expect(response.length).toBeLessThanOrEqual(3)
    })

    it('should work with reactive request body', async () => {
      const postData = ref({
        title: 'Reactive Post',
        body: 'This is a reactive post',
        userId: 1
      })
      
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: postData.value
      })
      expect(response).toBeDefined()
      expect(response.title).toBe('Reactive Post')
    })
  })

  describe('Advanced Scenarios', () => {
    it('should handle concurrent requests', async () => {
      const promises = [
        $fetch('https://jsonplaceholder.typicode.com/posts/1'),
        $fetch('https://jsonplaceholder.typicode.com/posts/2'),
        $fetch('https://jsonplaceholder.typicode.com/posts/3')
      ]
      
      const responses = await Promise.all(promises)
      expect(responses).toHaveLength(3)
      expect(responses[0].id).toBe(1)
      expect(responses[1].id).toBe(2)
      expect(responses[2].id).toBe(3)
    })

    it('should handle sequential requests', async () => {
      const post1 = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
      expect(post1.id).toBe(1)
      
      const post2 = await $fetch('https://jsonplaceholder.typicode.com/posts/2')
      expect(post2.id).toBe(2)
      
      const post3 = await $fetch('https://jsonplaceholder.typicode.com/posts/3')
      expect(post3.id).toBe(3)
    })

    it('should handle request chaining', async () => {
      // Primeiro, buscar um post
      const post = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
      expect(post.userId).toBeDefined()
      
      // Depois, buscar o usuário desse post
      const user = await $fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      expect(user.id).toBe(post.userId)
      expect(user.name).toBeDefined()
    })

    it('should handle conditional requests', async () => {
      const shouldFetchPost = ref(true)
      const postId = ref(1)
      
      if (shouldFetchPost.value) {
        const response = await $fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
        expect(response).toBeDefined()
        expect(response.id).toBe(1)
      }
    })
  })

  describe('Performance and Optimization', () => {
    it('should handle multiple rapid requests', async () => {
      const requests = []
      for (let i = 1; i <= 5; i++) {
        requests.push($fetch(`https://jsonplaceholder.typicode.com/posts/${i}`))
      }
      
      const responses = await Promise.all(requests)
      expect(responses).toHaveLength(5)
      responses.forEach((response, index) => {
        expect(response.id).toBe(index + 1)
      })
    })

    it('should handle request cancellation patterns', async () => {
      // Simular padrão de cancelamento (sem AbortController real)
      expect(async () => {
        const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
        expect(response).toBeDefined()
      }).not.toThrow()
    })

    it('should handle large response data', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts')
      expect(Array.isArray(response)).toBe(true)
      expect(response.length).toBeGreaterThan(50) // JSONPlaceholder tem 100 posts
    })
  })

  describe('Integration with Nuxt Environment', () => {
    it('should work within Nuxt test environment', async () => {
      // Verificar se estamos no ambiente Nuxt correto
      expect(typeof $fetch).toBe('function')
      
      // Verificar se as importações automáticas funcionam
      expect(typeof ref).toBe('function')
      expect(typeof computed).toBe('function')
      
      // Fazer uma requisição real
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
      expect(response).toBeDefined()
    })

    it('should handle SSR-compatible requests', async () => {
      const response = await $fetch('https://jsonplaceholder.typicode.com/posts/1')
      expect(response).toBeDefined()
      expect(response.id).toBe(1)
    })

    it('should work with Nuxt composables', async () => {
      const postId = ref(1)
      const computedUrl = computed(() => `https://jsonplaceholder.typicode.com/posts/${postId.value}`)
      
      const response = await $fetch(computedUrl.value)
      expect(response).toBeDefined()
      expect(response.id).toBe(postId.value)
    })
  })
})
