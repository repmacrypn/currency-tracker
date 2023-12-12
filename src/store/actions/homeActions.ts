import { RequestStatusType } from '@/store/reducers/app/types'
import { HomeType } from '@/store/reducers/home/types'
import { ICurrencyPrices, ICurrencyValues } from '@/types/currencies'

export const getCurrencyValues = (payload: ICurrencyValues) =>
  ({
    type: HomeType.GET_CURRENCY_VALUES,
    payload,
  }) as const

export const getCurrencyPrices = (payload: ICurrencyPrices) =>
  ({
    type: HomeType.GET_CURRENCY_PRICES,
    payload,
  }) as const

export const setCurrencyError = (payload: string | null) =>
  ({
    type: HomeType.SET_CURRENCY_ERROR,
    payload,
  }) as const

export const setCurrencyStatus = (payload: RequestStatusType) =>
  ({
    type: HomeType.SET_CURRENCY_STATUS,
    payload,
  }) as const

export const setCurrencyFrom = (payload: string | null) =>
  ({
    type: HomeType.SET_CURRENCY_FROM,
    payload,
  }) as const

export const setCurrencyTo = (payload: string | null) =>
  ({
    type: HomeType.SET_CURRENCY_TO,
    payload,
  }) as const

export const setConvertValue = (payload: number) =>
  ({
    type: HomeType.SET_CONVERT_VALUE,
    payload,
  }) as const
