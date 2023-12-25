import { setAppError, setAppStatus, setModal } from '@/store/actions/appActions'

export interface IAppState {
  appStatus: RequestStatusType
  appError: string | null
  isModalOpen: boolean
}

export enum RequestStatusType {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum AppType {
  SET_STATUS = 'APP/SET_STATUS',
  SET_ERROR = 'APP/SET_APP_ERROR',
  SET_MODAL = 'APP/SET_MODAL',
}

export type ActionsAppType =
  | ReturnType<typeof setAppStatus>
  | ReturnType<typeof setAppError>
  | ReturnType<typeof setModal>
