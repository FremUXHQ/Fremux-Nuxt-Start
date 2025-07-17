// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { useHead } from '#imports'
import { ref, computed, reactive } from 'vue'

describe('useHead composable - Advanced Tests', () => {
  describe('Composable Availability and Type Safety', () => {
    it('should be available as a function', () => {
      expect(typeof useHead).toBe('function')
    })

    it('should accept MetaObject configuration', () => {
      expect(() => {
        useHead({
          title: 'Test Title',
          meta: [{ name: 'description', content: 'Test description' }]
        })
      }).not.toThrow()
    })

    it('should handle empty configuration', () => {
      expect(() => {
        useHead({})
      }).not.toThrow()
    })
  })

  describe('Reactive Data Support', () => {
    it('should accept reactive title', () => {
      const reactiveTitle = ref('Dynamic Title')
      
      expect(() => {
        useHead({
          title: reactiveTitle
        })
      }).not.toThrow()
    })

    it('should accept computed title', () => {
      const baseTitle = ref('Base')
      const computedTitle = computed(() => `${baseTitle.value} - Computed`)
      
      expect(() => {
        useHead({
          title: computedTitle
        })
      }).not.toThrow()
    })

    it('should accept reactive meta tags', () => {
      const description = ref('Dynamic description')
      
      expect(() => {
        useHead({
          meta: [
            {
              name: 'description',
              content: description
            }
          ]
        })
      }).not.toThrow()
    })

    it('should accept function-based reactive content', () => {
      const dynamicContent = ref('Initial content')
      
      expect(() => {
        useHead({
          title: () => `Dynamic: ${dynamicContent.value}`,
          meta: [
            {
              name: 'description',
              content: () => `Description: ${dynamicContent.value}`
            }
          ]
        })
      }).not.toThrow()
    })
  })

  describe('Configuration Structure Validation', () => {
    it('should handle title configuration', () => {
      expect(() => {
        useHead({
          title: 'Page Title'
        })
      }).not.toThrow()
    })

    it('should handle titleTemplate configuration', () => {
      expect(() => {
        useHead({
          title: 'Page',
          titleTemplate: (title) => `${title} - FREMUX`
        })
      }).not.toThrow()
    })

    it('should handle meta tags array', () => {
      expect(() => {
        useHead({
          meta: [
            { name: 'description', content: 'Page description' },
            { property: 'og:title', content: 'OG Title' },
            { name: 'author', content: 'FREMUX Team' }
          ]
        })
      }).not.toThrow()
    })

    it('should handle link tags array', () => {
      expect(() => {
        useHead({
          link: [
            { rel: 'canonical', href: 'https://fremux.com' },
            { rel: 'icon', href: '/favicon.ico' }
          ]
        })
      }).not.toThrow()
    })

    it('should handle script tags array', () => {
      expect(() => {
        useHead({
          script: [
            { src: 'https://example.com/script.js' },
            { innerHTML: 'console.log("inline script")' }
          ]
        })
      }).not.toThrow()
    })

    it('should handle style tags array', () => {
      expect(() => {
        useHead({
          style: [
            { innerHTML: 'body { margin: 0; }' }
          ]
        })
      }).not.toThrow()
    })

    it('should handle htmlAttrs configuration', () => {
      expect(() => {
        useHead({
          htmlAttrs: {
            lang: 'pt-BR',
            dir: 'ltr'
          }
        })
      }).not.toThrow()
    })

    it('should handle bodyAttrs configuration', () => {
      expect(() => {
        useHead({
          bodyAttrs: {
            class: 'dark-theme',
            'data-theme': 'dark'
          }
        })
      }).not.toThrow()
    })
  })

  describe('Error Handling and Edge Cases', () => {
    it('should handle null configuration gracefully', () => {
      expect(() => {
        useHead(null as any)
      }).not.toThrow()
    })

    it('should handle undefined values in configuration', () => {
      expect(() => {
        useHead({
          title: undefined,
          meta: undefined,
          link: undefined
        })
      }).not.toThrow()
    })

    it('should handle empty arrays', () => {
      expect(() => {
        useHead({
          meta: [],
          link: [],
          script: [],
          style: []
        })
      }).not.toThrow()
    })

    it('should handle invalid meta tag structure', () => {
      expect(() => {
        useHead({
          meta: [
            null as any,
            undefined as any,
            { invalidProp: 'value' } as any
          ]
        })
      }).not.toThrow()
    })
  })

  describe('Performance and Multiple Calls', () => {
    it('should handle multiple useHead calls without errors', () => {
      expect(() => {
        // Simular múltiplas chamadas como em componentes diferentes
        useHead({ title: 'Title 1' })
        useHead({ title: 'Title 2' })
        useHead({ meta: [{ name: 'description', content: 'Desc 1' }] })
        useHead({ meta: [{ name: 'keywords', content: 'keyword1, keyword2' }] })
      }).not.toThrow()
    })

    it('should handle rapid successive calls', () => {
      expect(() => {
        for (let i = 0; i < 10; i++) {
          useHead({
            title: `Title ${i}`,
            meta: [{ name: `test-${i}`, content: `Content ${i}` }]
          })
        }
      }).not.toThrow()
    })

    it('should handle complex nested reactive structures', () => {
      const complexData = reactive({
        page: {
          title: 'Complex Page',
          description: 'Complex description',
          author: 'FREMUX Team'
        },
        seo: {
          keywords: ['nuxt', 'vue', 'testing'],
          ogImage: 'https://fremux.com/og-image.jpg'
        }
      })

      expect(() => {
        useHead({
          title: () => complexData.page.title,
          meta: [
            {
              name: 'description',
              content: () => complexData.page.description
            },
            {
              name: 'author',
              content: () => complexData.page.author
            },
            {
              name: 'keywords',
              content: () => complexData.seo.keywords.join(', ')
            },
            {
              property: 'og:image',
              content: () => complexData.seo.ogImage
            }
          ]
        })
      }).not.toThrow()
    })
  })

  describe('Integration with Nuxt Environment', () => {
    it('should work within Nuxt test environment', () => {
      // Verificar se estamos no ambiente Nuxt correto
      expect(typeof useHead).toBe('function')
      
      // Verificar se as importações automáticas funcionam
      expect(typeof ref).toBe('function')
      expect(typeof computed).toBe('function')
      expect(typeof reactive).toBe('function')
    })

    it('should handle SSR-compatible configurations', () => {
      expect(() => {
        useHead({
          title: 'SSR Page',
          meta: [
            { name: 'description', content: 'SSR description' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
          ],
          link: [
            { rel: 'canonical', href: 'https://fremux.com/ssr-page' }
          ]
        })
      }).not.toThrow()
    })
  })
})
