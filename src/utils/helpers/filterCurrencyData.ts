import { CurrencyDataItem, ICurrencyData } from '@/types/currencies'

export const filterCurrencyData = (currency: ICurrencyData) => {
  return Object.entries(currency).filter(
    ([key]) =>
      key === CurrencyDataItem.Name ||
      key === CurrencyDataItem.Code ||
      key === CurrencyDataItem.Symbol ||
      key === CurrencyDataItem.Symbol_native,
  )
}
