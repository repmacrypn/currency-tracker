import { RequestStatusType } from '@/store/reducers/app/types'
import { ActionsHomeType, HomeType, IHomeState } from '@/store/reducers/home/types'

const initialState: IHomeState = {
  currencyValues: null,
  currencyPrices: null,
  currencyError: null,
  currencyStatus: RequestStatusType.Idle,
  convertFrom: null,
  convertTo: null,
  convertValue: null,
}

export const homeReducer = (
  state = initialState,
  action: ActionsHomeType,
): IHomeState => {
  switch (action.type) {
    case HomeType.GET_CURRENCY_VALUES:
      return { ...state, currencyValues: action.payload }

    case HomeType.GET_CURRENCY_PRICES:
      return { ...state, currencyPrices: action.payload }

    case HomeType.SET_CURRENCY_ERROR:
      return { ...state, currencyError: action.payload }

    case HomeType.SET_CURRENCY_FROM:
      return { ...state, convertFrom: action.payload }

    case HomeType.SET_CURRENCY_TO:
      return { ...state, convertTo: action.payload }

    case HomeType.SET_CONVERT_VALUE:
      return { ...state, convertValue: action.payload }

    case HomeType.SET_CURRENCY_STATUS:
      return { ...state, currencyStatus: action.payload }

    default:
      return state
  }
}
