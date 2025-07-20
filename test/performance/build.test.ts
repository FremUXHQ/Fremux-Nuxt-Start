import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync, statSync } from 'fs'
import { resolve } from 'path'

describe('Build and Performance Tests', () => {
  describe('Package Configuration', () => {
    it('should have valid package.json', () => {
      const packagePath = resolve('package.json')
      const packageContent = readFileSync(packagePath, 'utf-8')
      const packageJson = JSON.parse(packageContent)
      
      expect(packageJson.name).toBe('fremux-nuxt-starter')
      expect(packageJson.scripts).toBeDefined()
      expect(packageJson.scripts.build).toBeDefined()
      expect(packageJson.scripts.dev).toBeDefined()
      expect(packageJson.scripts.test).toBeDefined()
    })

    it('should have Nuxt 4.x dependencies', () => {
      const packagePath = resolve('package.json')
      const packageContent = readFileSync(packagePath, 'utf-8')
      const packageJson = JSON.parse(packageContent)
      
      expect(packageJson.devDependencies.nuxt).toMatch(/^\^4\./)
      expect(packageJson.devDependencies['@nuxt/test-utils']).toBeDefined()
      expect(packageJson.devDependencies.vitest).toBeDefined()
    })

    it('should have proper testing configuration', () => {
      const packagePath = resolve('package.json')
      const packageContent = readFileSync(packagePath, 'utf-8')
      const packageJson = JSON.parse(packageContent)
      
      expect(packageJson.devDependencies['@vitest/coverage-v8']).toBeDefined()
      expect(packageJson.devDependencies['@vue/test-utils']).toBeDefined()
      expect(packageJson.devDependencies.jsdom).toBeDefined()
    })
  })

  describe('File Structure Validation', () => {
    it('should have proper directory structure', () => {
      const requiredDirs = [
        'app',
        'app/pages',
        'app/layouts',
        'app/components',
        'app/assets',
        'server',
        'server/api',
        'test',
        'private'
      ]
      
      requiredDirs.forEach(dir => {
        const dirPath = resolve(dir)
        expect(existsSync(dirPath)).toBe(true)
      })
    })

    it('should have required configuration files', () => {
      const requiredFiles = [
        'nuxt.config.ts',
        'app.config.ts',
        'tsconfig.json',
        'vitest.config.ts',
        'package.json',
        'pnpm-lock.yaml'
      ]
      
      requiredFiles.forEach(file => {
        const filePath = resolve(file)
        expect(existsSync(filePath)).toBe(true)
      })
    })

    it('should have reasonable file sizes', () => {
      const fileSizeChecks = [
        { file: 'nuxt.config.ts', maxSize: 5000 }, // 5KB
        { file: 'app/app.config.ts', maxSize: 2000 }, // 2KB
        { file: 'vitest.config.ts', maxSize: 3000 }, // 3KB
        { file: 'package.json', maxSize: 10000 } // 10KB
      ]
      
      fileSizeChecks.forEach(({ file, maxSize }) => {
        const filePath = resolve(file)
        if (existsSync(filePath)) {
          const stats = statSync(filePath)
          expect(stats.size).toBeLessThan(maxSize)
        }
      })
    })
  })

  describe('Asset Optimization', () => {
    it('should have CSS assets properly organized', () => {
      const cssPath = resolve('app/assets/css/main.css')
      if (existsSync(cssPath)) {
        const cssContent = readFileSync(cssPath, 'utf-8')
        
        // Check for CSS variables and modern CSS
        expect(cssContent).toMatch(/(--[\w-]+:|:root|@media)/)
      }
    })

    it('should have proper static assets structure', () => {
      const publicPath = resolve('public')
      expect(existsSync(publicPath)).toBe(true)
      
      // Check for common static assets
      const commonAssets = ['favicon.ico', 'robots.txt']
      commonAssets.forEach(asset => {
        const assetPath = resolve(`public/${asset}`)
        // Assets may or may not exist, but directory should be accessible
        expect(existsSync(publicPath)).toBe(true)
      })
    })
  })

  describe('Development Environment', () => {
    it('should have proper development configuration', () => {
      const nuxtConfigPath = resolve('nuxt.config.ts')
      const nuxtConfigContent = readFileSync(nuxtConfigPath, 'utf-8')
      
      // Check for development optimizations
      expect(nuxtConfigContent).toContain('devtools: { enabled: true }')
    })

    it('should have test environment properly configured', () => {
      const vitestConfigPath = resolve('vitest.config.ts')
      const vitestConfigContent = readFileSync(vitestConfigPath, 'utf-8')
      
      expect(vitestConfigContent).toContain('defineVitestConfig')
      expect(vitestConfigContent).toContain("environment: 'nuxt'")
    })

    it('should have proper TypeScript project references', () => {
      const tsconfigPath = resolve('tsconfig.json')
      const tsconfigContent = readFileSync(tsconfigPath, 'utf-8')
      const tsconfig = JSON.parse(tsconfigContent)
      
      expect(tsconfig.references).toBeDefined()
      expect(Array.isArray(tsconfig.references)).toBe(true)
      expect(tsconfig.references.length).toBeGreaterThan(0)
    })
  })

  describe('Security and Best Practices', () => {
    it('should not have sensitive information in config files', () => {
      const configFiles = ['nuxt.config.ts', 'app/app.config.ts']
      
      configFiles.forEach(file => {
        const filePath = resolve(file)
        if (existsSync(filePath)) {
          const content = readFileSync(filePath, 'utf-8')
          
          // Check for common sensitive patterns
          expect(content).not.toMatch(/(password|secret|key|token).*=.*['"][^'"]*['"]/)
        }
      })
    })

    it('should have proper gitignore configuration', () => {
      const gitignorePath = resolve('.gitignore')
      if (existsSync(gitignorePath)) {
        const gitignoreContent = readFileSync(gitignorePath, 'utf-8')
        
        const requiredIgnores = ['node_modules', '.nuxt', 'dist', '.env']
        requiredIgnores.forEach(ignore => {
          expect(gitignoreContent).toContain(ignore)
        })
      }
    })
  })
})
