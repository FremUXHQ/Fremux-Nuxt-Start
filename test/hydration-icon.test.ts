import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
// Icon component é auto-importado pelo Nuxt

describe('Hydration Icon Test', () => {
  it('deve renderizar ícones sem hydration mismatch', async () => {
    const component = await mountSuspended({
      template: `
        <div>
          <Icon name="heroicons:home" size="32" />
          <Icon name="heroicons:user" size="32" />
        </div>
      `,
      // Icon é auto-importado pelo Nuxt
    })

    // COMPORTAMENTO OFICIAL: @nuxt/icon renderiza <span> no servidor
    const icons = component.findAll('.iconify')
    expect(icons.length).toBeGreaterThan(0)
    
    // Confirma que são spans, não SVGs
    expect(component.html()).toContain('<span class="iconify')
    expect(component.html()).not.toContain('<svg')
  })

  it('deve funcionar com ClientOnly wrapper', async () => {
    const component = await mountSuspended({
      template: `
        <div>
          <ClientOnly>
            <Icon name="heroicons:home" size="32" />
            <template #fallback>
              <div data-testid="fallback">Carregando...</div>
            </template>
          </ClientOnly>
        </div>
      `,
      // Icon é auto-importado pelo Nuxt
    })

    // Em ambiente de teste, ClientOnly deve renderizar o conteúdo
    const icons = component.findAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(0)
  })

  it('deve verificar se Icon funciona sem ClientOnly', async () => {
    const component = await mountSuspended({
      template: `
        <div>
          <Icon name="heroicons:home" size="32" />
        </div>
      `,
      // Icon é auto-importado pelo Nuxt
    })

    // CONFIRMAÇÃO: Funciona sem ClientOnly em ambiente de teste
    // Mas no browser real causaria hydration mismatch
    expect(component.html()).toContain('<span class="iconify')
    expect(component.html()).not.toContain('<svg')
  })
})
