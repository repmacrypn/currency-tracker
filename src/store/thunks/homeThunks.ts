import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'

import { currencyAPI } from '@/api'
import { setAppStatus } from '@/store/actions/appActions'
import {
  getCurrencyPrices,
  getCurrencyValues,
  setCurrencyError,
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
    dispatch(setCurrencyError(null))
    dispatch(setAppStatus(RequestStatusType.Succeeded))
  } catch (e) {
    if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
      const err = e.response ? e.response?.data.message : e.message

      localStorage.clear()

      dispatch(setCurrencyError(err))
    }
    dispatch(setAppStatus(RequestStatusType.Failed))
  }
}
