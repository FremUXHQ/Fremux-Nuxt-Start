import { vi, beforeEach } from 'vitest'

// Mock global objects
global.console = {
  ...console,
  log: vi.fn(),
  error: vi.fn(),
  warn: vi.fn()
}

// Clear all mocks before each test
beforeEach(() => {
  vi.clearAllMocks()
})
