import { vi, beforeEach } from 'vitest'
import { reactive, ref } from 'vue'

// Mock console methods
vi.spyOn(console, 'log').mockImplementation(() => {})
vi.spyOn(console, 'warn').mockImplementation(() => {})
vi.spyOn(console, 'error').mockImplementation(() => {})

// Mock Vue composables globally
global.reactive = reactive
global.ref = ref

// Mock Nuxt composables
global.useHead = vi.fn()
global.navigateTo = vi.fn()
global.useRouter = vi.fn(() => ({
  push: vi.fn(),
  replace: vi.fn(),
  go: vi.fn(),
  back: vi.fn(),
  forward: vi.fn()
}))

// Clear all mocks before each test
beforeEach(() => {
  vi.clearAllMocks()
})
