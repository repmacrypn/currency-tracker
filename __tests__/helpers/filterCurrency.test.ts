import { CURRENCIES } from '@/constants/currencies'
import { defaultCurrencyData } from '@/constants/testsData'
import { filterCurrency } from '@/utils/helpers/filterCurrencies'

describe('filterCurrency', () => {
  const currency = defaultCurrencyData

  test('should return array without the current currency', () => {
    const result = filterCurrency(currency)

    expect(result).toHaveLength(8)
    expect(result).not.toContain(currency)
  })

  test(`shouldn't modify the original array`, () => {
    const originalArray = CURRENCIES.split(',')

    filterCurrency(currency)
    expect(CURRENCIES).toEqual(originalArray.join(','))
  })
})
