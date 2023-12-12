import {
  getCurrencyPrices,
  getCurrencyValues,
  setConvertValue,
  setCurrencyError,
  setCurrencyFrom,
  setCurrencyStatus,
  setCurrencyTo,
} from '@/store/actions/homeActions'
import { RequestStatusType } from '@/store/reducers/app/types'
import { ICurrencyPrices, ICurrencyValues } from '@/types/currencies'

export interface IHomeState {
  currencyValues: ICurrencyValues | null
  currencyPrices: ICurrencyPrices | null
  currencyError: string | null
  currencyStatus: RequestStatusType
  convertFrom: string | null
  convertTo: string | null
  convertValue: number | null
}

export enum HomeType {
  GET_CURRENCY_VALUES = 'HOME/GET_CURRENCY_VALUES',
  GET_CURRENCY_PRICES = 'HOME/GET_CURRENCY_PRICES',
  SET_CURRENCY_ERROR = 'HOME/SET_CURRENCY_ERROR',
  SET_CURRENCY_STATUS = 'HOME/SET_CURRENCY_STATUS',
  SET_CURRENCY_FROM = 'HOME/SET_CURRENCY_FROM',
  SET_CURRENCY_TO = 'HOME/SET_CURRENCY_TO',
  SET_CONVERT_VALUE = 'HOME/SET_CONVERT_VALUE',
}

export type ActionsHomeType =
  | ReturnType<typeof getCurrencyValues>
  | ReturnType<typeof getCurrencyPrices>
  | ReturnType<typeof setCurrencyError>
  | ReturnType<typeof setCurrencyStatus>
  | ReturnType<typeof setCurrencyFrom>
  | ReturnType<typeof setCurrencyTo>
  | ReturnType<typeof setConvertValue>
