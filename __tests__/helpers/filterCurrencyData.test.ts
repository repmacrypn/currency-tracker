import { defaultCurrencyData } from '@/constants/testsData'
import { filterCurrencyData } from '@/utils/helpers/filterCurrencyData'

describe('filterCurrencyData', () => {
  const currency = defaultCurrencyData

  test('should return array with the correct currency data', () => {
    const result = filterCurrencyData(currency)

    expect(result).toHaveLength(4)
    expect(result).toEqual([
      ['symbol', 'AR$'],
      ['name', 'Argentine Peso'],
      ['symbol_native', '$'],
      ['code', 'ARS'],
    ])
    expect(result).not.toContain(['rounding', 0])
  })
})
