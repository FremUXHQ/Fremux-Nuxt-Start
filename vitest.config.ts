import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    setupFiles: ['./test/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './app/coverage',
      exclude: [
        'node_modules/',
        '.nuxt/',
        'coverage/',
        'test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types/**',
        'private/**'
      ],
      include: [
        'app/**/*.{js,ts,vue}',
        'server/**/*.{js,ts}',
        'nuxt.config.ts',
        'app.config.ts'
      ],
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70
        }
      }
    }
  }
})
