import {
  ActionsAppType,
  AppType,
  IAppState,
  RequestStatusType,
} from '@/store/reducers/app/types'

const initialState: IAppState = {
  appStatus: RequestStatusType.Idle,
  appError: null,
  isModalOpen: false,
}

export const appReducer = (state = initialState, action: ActionsAppType): IAppState => {
  switch (action.type) {
    case AppType.SET_STATUS:
      return { ...state, appStatus: action.payload }

    case AppType.SET_ERROR:
      return { ...state, appError: action.payload }

    case AppType.SET_MODAL:
      return { ...state, isModalOpen: action.payload }

    default: {
      return state
    }
  }
}
