import { CURRENCIES } from '@/constants/currencies'
import { getCurrencyBySearch } from '@/utils/helpers/getCurrencyBySearch'

describe('getCurrencyBySearch', () => {
  const currencyCodes = CURRENCIES

  test('should return array with the wanted currencies', () => {
    const searchValue = 'c'
    const result = getCurrencyBySearch(searchValue, currencyCodes)

    expect(result).toHaveLength(3)
    expect(result).toEqual(['CAD', 'CNY', 'BTC'])
    expect(result).not.toContain('EUR')
  })

  test('should return an origin array while there is no searchValue', () => {
    const searchValue = ''
    const result = getCurrencyBySearch(searchValue, currencyCodes)

    expect(result).toHaveLength(9)
    expect(result).toEqual(CURRENCIES.split(','))
  })

  test('should return an empty array while the searchValue is not appropriate', () => {
    const searchValue = 'qwerty'
    const result = getCurrencyBySearch(searchValue, currencyCodes)

    expect(result).toHaveLength(0)
    expect(result).toEqual([])
    expect(result).not.toContain('EUR')
  })
})
