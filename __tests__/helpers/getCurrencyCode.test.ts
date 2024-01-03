import { getCurrencyCode } from '@/utils/helpers/getCurrencyCode'

describe('getCurrencyCode', () => {
  test('should find and return a current code if it is provided', () => {
    const currentCode = 'EUR'
    const result = getCurrencyCode(currentCode)

    expect(result).toBe('EUR')
    expect(result).not.toBe('USD')
  })

  test('should return null if current code is not provided', () => {
    const currentCode = null
    const result = getCurrencyCode(currentCode)

    expect(result).toBe(null)
    expect(result).not.toBe('USD')
  })

  test('should return null if current code is an empty string', () => {
    const currentCode = ''
    const result = getCurrencyCode(currentCode)

    expect(result).toBe(null)
    expect(result).not.toBe('USD')
  })

  test('should return undefined if current code was not not found', () => {
    const currentCode = 'qwerty'
    const result = getCurrencyCode(currentCode)

    expect(result).toBe(undefined)
    expect(result).not.toBe('USD')
  })
})
