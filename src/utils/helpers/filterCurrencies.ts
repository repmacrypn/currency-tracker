import { CURRENCIES } from '@/constants/currencies'
import { ICurrencyData } from '@/types/currencies'

export const filterCurrency = (currentCurrency: ICurrencyData) => {
  return CURRENCIES.split(',').filter((code) => code !== currentCurrency.code)
}
