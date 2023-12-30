import axios from 'axios'

import { defaultCategories, defaultLimit, defaultRadius } from '@/constants/banksData'
import {
  CURRENCIES,
  defaultPeriodId,
  defaultTimeEnd,
  defaultTimeStart,
} from '@/constants/currencies'
import { IBanksData } from '@/types/bank'
import { IGeoCity } from '@/types/city'
import { ICurrencyPrices, ICurrencyValues } from '@/types/currencies'
import { ICurrencyTimeline } from '@/types/timeline'

const CURRENCIES_URL = process.env.REACT_APP_CURRENCIES_URL
const CURRENCIES_API_KEY = process.env.REACT_APP_CURRENCIES_API_KEY
const TIMELINE_URL = process.env.REACT_APP_TIMELINE_URL
const TIMELINE_API_KEY = process.env.REACT_APP_TIMELINE_API_KEY
const BANKS_URL = process.env.REACT_APP_BANKS_URL
const BANKS_API_KEY = process.env.REACT_APP_BANKS_API_KEY

const currenciesInstance = axios.create({
  baseURL: CURRENCIES_URL,
})

const timeLineInstance = axios.create({
  baseURL: TIMELINE_URL,
  headers: {
    'X-CoinAPI-Key': TIMELINE_API_KEY,
  },
})

const banksInstance = axios.create({
  baseURL: BANKS_URL,
  headers: {
    Authorization: BANKS_API_KEY,
  },
})

export const currencyAPI = {
  async getCurrencyValues() {
    const res = await currenciesInstance.get<ICurrencyValues>('currencies', {
      params: {
        apikey: CURRENCIES_API_KEY,
        currencies: CURRENCIES,
      },
    })

    return res.data
  },

  async getCurrencyPrices() {
    const res = await currenciesInstance.get<ICurrencyPrices>(`latest`, {
      params: {
        apikey: CURRENCIES_API_KEY,
        currencies: CURRENCIES,
      },
    })

    return res.data
  },

  async getConversion(currencyFrom: string, currencyTo: string) {
    const res = await currenciesInstance.get<ICurrencyPrices>('latest', {
      params: {
        apikey: CURRENCIES_API_KEY,
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
          period_id: defaultPeriodId,
          time_start: `${day}${defaultTimeStart}`,
          time_end: `${day}${defaultTimeEnd}`,
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
          period_id: defaultPeriodId,
          time_start: `${month}${defaultTimeStart}`,
        },
      },
    )

    return res.data
  },
}

export const mapAPI = {
  async fetchBanks(geo: IGeoCity) {
    const { longitude, latitude } = geo

    const res = await banksInstance.get<IBanksData>('places/search', {
      params: {
        ll: `${latitude},${longitude}`,
        radius: defaultRadius,
        categories: defaultCategories,
        limit: defaultLimit,
      },
    })

    return res.data
  },
}
