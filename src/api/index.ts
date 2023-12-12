import axios from 'axios'

import { CURRENCIES } from '@/constants/currencies'
import { ICurrencyPrices, ICurrencyValues } from '@/types/currencies'
import { ICurrencyTimeline } from '@/types/timeline'

const currenciesInstance = axios.create({
  baseURL: 'https://api.currencyapi.com/v3/',
})

const timeLineInstance = axios.create({
  baseURL: 'https://rest.coinapi.io/v1/ohlcv/',
  headers: {
    'X-CoinAPI-Key': '17F13CF8-EE0D-4960-8B2C-1591C8A6783E',
  },
})

export const currencyAPI = {
  async getCurrencyValues() {
    const res = await currenciesInstance.get<ICurrencyValues>('currencies', {
      params: {
        apikey: 'cur_live_20Btjfbs9InC9eQLl8C7lg91XbUq9KuBGthD8CiX',
        currencies: CURRENCIES,
      },
    })

    return res.data
  },

  async getCurrencyPrices() {
    const res = await currenciesInstance.get<ICurrencyPrices>(`latest`, {
      params: {
        apikey: 'cur_live_20Btjfbs9InC9eQLl8C7lg91XbUq9KuBGthD8CiX',
        currencies: CURRENCIES,
      },
    })

    return res.data
  },

  async getConversion(currencyFrom: string, currencyTo: string) {
    const res = await currenciesInstance.get<ICurrencyPrices>('latest', {
      params: {
        apikey: 'cur_live_20Btjfbs9InC9eQLl8C7lg91XbUq9KuBGthD8CiX',
        base_currency: currencyFrom,
        currencies: currencyTo,
      },
    })

    return res.data
  },

  async getCurrencyDataByDay(code: string, day: string) {
    const res = await timeLineInstance.get<ICurrencyTimeline[]>(
      `BITSTAMP_SPOT_${code}_USD/history`,
      {
        params: {
          period_id: '1DAY',
          time_start: `${day}T00:00:00`,
          time_end: `${day}T23:59:59`,
        },
      },
    )

    return res.data
  },

  async getCurrencyDataByMonth(code: string, month: string) {
    const res = await timeLineInstance.get<ICurrencyTimeline[]>(
      `BITSTAMP_SPOT_${code}_USD/history`,
      {
        params: {
          period_id: '1DAY',
          time_start: `${month}T00:00:00`,
        },
      },
    )

    return res.data
  },
}
