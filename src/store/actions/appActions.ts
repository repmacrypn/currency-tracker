import { AppType, RequestStatusType } from '@/store/reducers/app/types'

export const setAppStatus = (payload: RequestStatusType) =>
  ({
    type: AppType.SET_STATUS,
    payload,
  }) as const

export const setAppError = (payload: string | null) =>
  ({
    type: AppType.SET_ERROR,
    payload,
  }) as const

export const setModal = (payload: boolean) =>
  ({
    type: AppType.SET_MODAL,
    payload,
  }) as const
