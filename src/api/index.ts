import axios from 'axios'

import { CURRENCIES } from '@/constants/currencies'
import { ICurrencyPrices, ICurrencyValues } from '@/types/currencies'

const instance = axios.create({
  baseURL: 'https://api.currencyapi.com/v3/',
})

export const currencyAPI = {
  async getCurrencyValues() {
    const res = await instance.get<ICurrencyValues>('currencies', {
      params: {
        apikey: 'cur_live_20Btjfbs9InC9eQLl8C7lg91XbUq9KuBGthD8CiX',
        currencies: CURRENCIES,
      },
    })

    return res.data
  },
  async getCurrencyPrices() {
    const res = await instance.get<ICurrencyPrices>(`latest`, {
      params: {
        apikey: 'cur_live_20Btjfbs9InC9eQLl8C7lg91XbUq9KuBGthD8CiX',
        currencies: CURRENCIES,
      },
    })

    return res.data
  },
}
