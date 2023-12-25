import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'

import { mapAPI } from '@/api'
import { setAppStatus } from '@/store/actions/appActions'
import { setBanks, setGeoPosition, setMapError } from '@/store/actions/mapActions'
import { RequestStatusType } from '@/store/reducers/app/types'
import { AppThunk } from '@/store/types'
import { IGeoCity } from '@/types/city'

export const fetchBanks =
  (geo: IGeoCity): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setAppStatus(RequestStatusType.Loading))

      const res = await mapAPI.fetchBanks(geo)

      dispatch(setBanks(res))
      dispatch(setMapError(null))
      dispatch(setAppStatus(RequestStatusType.Succeeded))
    } catch (e) {
      if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
        const err = e.response ? e.response?.data.message : e.message

        dispatch(setMapError(err))
      }
      dispatch(setAppStatus(RequestStatusType.Failed))
    }
  }

export const fetchGeo = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setAppStatus(RequestStatusType.Loading))

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords

          dispatch(setGeoPosition({ latitude, longitude }))
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            dispatch(setMapError('Access to the location was denied by the user'))
          } else {
            dispatch(setMapError(error.message))
          }
        },
      )
    } else {
      dispatch(setMapError('Your browser does not support geolocation'))
    }
  } finally {
    dispatch(setAppStatus(RequestStatusType.Succeeded))
  }
}
