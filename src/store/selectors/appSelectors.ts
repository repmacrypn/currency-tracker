import { RootStoreType } from '@/store/types'

export const selectAppStatus = (state: RootStoreType) => state.app.appStatus
export const selectAppError = (state: RootStoreType) => state.app.appError
export const selectIsModalOpen = (state: RootStoreType) => state.app.isModalOpen
