import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

describe('Nuxt Configuration Tests', () => {
  describe('nuxt.config.ts', () => {
    it('should exist and be readable', () => {
      const configPath = resolve('nuxt.config.ts')
      expect(() => readFileSync(configPath, 'utf-8')).not.toThrow()
    })

    it('should have valid TypeScript syntax', () => {
      const configContent = readFileSync(resolve('nuxt.config.ts'), 'utf-8')
      expect(configContent).toContain('defineNuxtConfig')
      expect(configContent).toContain('export default')
    })

    it('should have devtools enabled', () => {
      const configContent = readFileSync(resolve('nuxt.config.ts'), 'utf-8')
      expect(configContent).toContain('devtools: { enabled: true }')
    })

    it('should have test-utils module configured', () => {
      const configContent = readFileSync(resolve('nuxt.config.ts'), 'utf-8')
      expect(configContent).toContain('@nuxt/test-utils/module')
    })

    it('should have CSS configuration', () => {
      const configContent = readFileSync(resolve('nuxt.config.ts'), 'utf-8')
      expect(configContent).toContain('css:')
      expect(configContent).toContain('~/assets/css/main.css')
    })
  })

  describe('app.config.ts', () => {
    it('should exist and be readable', () => {
      const configPath = resolve('app.config.ts')
      expect(() => readFileSync(configPath, 'utf-8')).not.toThrow()
    })

    it('should have valid app configuration', () => {
      const configContent = readFileSync(resolve('app.config.ts'), 'utf-8')
      expect(configContent).toContain('defineAppConfig')
      expect(configContent).toContain('title: \'FREMUX\'')
      expect(configContent).toContain('primary:')
    })

    it('should have theme configuration', () => {
      const configContent = readFileSync(resolve('app.config.ts'), 'utf-8')
      expect(configContent).toContain('theme:')
      expect(configContent).toContain('colors:')
      expect(configContent).toContain('#ff0000')
    })
  })

  describe('tsconfig.json', () => {
    it('should exist and be valid JSON', () => {
      const tsconfigPath = resolve('tsconfig.json')
      const content = readFileSync(tsconfigPath, 'utf-8')
      expect(() => JSON.parse(content)).not.toThrow()
    })

    it('should have project references', () => {
      const tsconfigContent = readFileSync(resolve('tsconfig.json'), 'utf-8')
      const config = JSON.parse(tsconfigContent)
      expect(config.references).toBeDefined()
      expect(Array.isArray(config.references)).toBe(true)
      expect(config.references.length).toBeGreaterThan(0)
    })

    it('should reference Nuxt generated configs', () => {
      const tsconfigContent = readFileSync(resolve('tsconfig.json'), 'utf-8')
      const config = JSON.parse(tsconfigContent)
      const paths = config.references.map((ref: any) => ref.path)
      expect(paths).toContain('./.nuxt/tsconfig.app.json')
      expect(paths).toContain('./.nuxt/tsconfig.server.json')
    })
  })
})
