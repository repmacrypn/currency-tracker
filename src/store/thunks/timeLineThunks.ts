import axios from 'axios'
import { Dispatch } from 'redux'

import { currencyAPI } from '@/api'
import {
  setChartData,
  setTimelineError,
  setTimelineStatus,
} from '@/store/actions/timeLineActions'
import { RequestStatusType } from '@/store/reducers/app/types'
import { AppThunk } from '@/store/types'

export const fetchCurrencyByDay =
  (code: string, day: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setTimelineStatus(RequestStatusType.Loading))

      const res = await currencyAPI.getCurrencyDataByDay(code, day)

      dispatch(setChartData(res))
      dispatch(setTimelineError(null))
      dispatch(setTimelineStatus(RequestStatusType.Succeeded))
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        const err = e.response ? e.response?.data.error : e.message

        dispatch(setTimelineError(err))
      }
      dispatch(setTimelineStatus(RequestStatusType.Failed))
    }
  }

export const fetchCurrencyByMonth =
  (code: string, month: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setTimelineStatus(RequestStatusType.Loading))

      const res = await currencyAPI.getCurrencyDataByMonth(code, month)

      dispatch(setChartData(res))
      dispatch(setTimelineError(null))
      dispatch(setTimelineStatus(RequestStatusType.Succeeded))
    } catch (e) {
      if (axios.isAxiosError(e) && e.response) {
        const err = e.response ? e.response?.data.error : e.message

        dispatch(setTimelineError(err))
      }
      dispatch(setTimelineStatus(RequestStatusType.Failed))
    }
  }
