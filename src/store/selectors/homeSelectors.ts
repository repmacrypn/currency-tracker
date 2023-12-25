import { RootStoreType } from '@/store/types'

export const selectCurrencyValues = (state: RootStoreType) => state.home.currencyValues
export const selectCurrencyPrices = (state: RootStoreType) => state.home.currencyPrices
export const selectConvertFrom = (state: RootStoreType) => state.home.convertFrom
export const selectConvertTo = (state: RootStoreType) => state.home.convertTo
export const selectConvertValue = (state: RootStoreType) => state.home.convertValue
export const selectCurrencyError = (state: RootStoreType) => state.home.currencyError
export const selectCurrencyStatus = (state: RootStoreType) => state.home.currencyStatus
