export interface ICurrencyValues {
  data: {
    [key: string]: ICurrencyData
  }
}

export interface ICurrencyData {
  symbol: string
  name: string
  symbol_native: string
  decimal_digits: number
  rounding: number
  code: string
  name_plural: string
}

export interface ICurrencyPrices {
  meta: { last_updated_at: string }
  data: {
    [key: string]: {
      code: string
      value: number
    }
  }
}

export interface ICurrencyStocks {
  name: string
  value: string
  img: string
}
