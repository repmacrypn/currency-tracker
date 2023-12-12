import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'

import { currencyAPI } from '@/api'
import { setAppError, setAppStatus } from '@/store/actions/appActions'
import {
  getCurrencyPrices,
  getCurrencyValues,
  setConvertValue,
  setCurrencyError,
  setCurrencyStatus,
} from '@/store/actions/homeActions'
import { RequestStatusType } from '@/store/reducers/app/types'

export const fetchCurrencies = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus(RequestStatusType.Loading))

    const dataValues = await currencyAPI.getCurrencyValues()
    const dataPrices = await currencyAPI.getCurrencyPrices()

    localStorage.setItem('currencyValues', JSON.stringify(dataValues))
    localStorage.setItem('currencyPrices', JSON.stringify(dataPrices))
    localStorage.setItem(
      'currencyTimestamp',
      JSON.stringify(dataPrices.meta.last_updated_at),
    )

    dispatch(getCurrencyValues(dataValues))
    dispatch(getCurrencyPrices(dataPrices))
    dispatch(setAppError(null))
    dispatch(setAppStatus(RequestStatusType.Succeeded))
  } catch (e) {
    if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
      const err = e.response ? e.response?.data.message : e.message

      localStorage.clear()

      dispatch(setAppError(err))
    }
    dispatch(setAppStatus(RequestStatusType.Failed))
  }
}

export const fetchConversion =
  (codeCurrencyFrom: string, codeCurrencyTo: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setCurrencyStatus(RequestStatusType.Loading))
      dispatch(setCurrencyError(null))
      const res = await currencyAPI.getConversion(codeCurrencyFrom, codeCurrencyTo)

      dispatch(setConvertValue(res.data[codeCurrencyTo].value))
      dispatch(setCurrencyStatus(RequestStatusType.Succeeded))
    } catch (e) {
      if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
        const err = e.response ? e.response?.data.message : e.message

        dispatch(setCurrencyError(err))
      }
      dispatch(setCurrencyStatus(RequestStatusType.Failed))
    }
  }
