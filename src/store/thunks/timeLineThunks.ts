import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'

import { currencyAPI } from '@/api'
import { setAppError, setAppStatus } from '@/store/actions/appActions'
import { setChartData } from '@/store/actions/timeLineActions'
import { RequestStatusType } from '@/store/reducers/app/types'
import { AppThunk } from '@/store/types'

export const fetchCurrencyByDay =
  (code: string, day: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setAppStatus(RequestStatusType.Loading))

      const res = await currencyAPI.getCurrencyDataByDay(code, day)

      dispatch(setChartData(res))
      dispatch(setAppError(null))
      dispatch(setAppStatus(RequestStatusType.Succeeded))
    } catch (e) {
      if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
        const err = e.response ? e.response?.data.message : e.message

        dispatch(setAppError(err))
      }
      dispatch(setAppStatus(RequestStatusType.Failed))
    }
  }

export const fetchCurrencyByMonth =
  (code: string, month: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setAppStatus(RequestStatusType.Loading))

      const res = await currencyAPI.getCurrencyDataByMonth(code, month)

      dispatch(setChartData(res))
      dispatch(setAppError(null))
      dispatch(setAppStatus(RequestStatusType.Succeeded))
    } catch (e) {
      if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
        const err = e.response ? e.response?.data.message : e.message

        dispatch(setAppError(err))
      }
      dispatch(setAppStatus(RequestStatusType.Failed))
    }
  }
