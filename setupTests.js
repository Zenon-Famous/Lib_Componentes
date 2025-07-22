import '@testing-library/jest-dom'
import { vi } from 'vitest'

beforeAll(() => {
  vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(() => Promise.resolve())
})