import { RequestStatusType } from '@/store/reducers/app/types'
import { ActionsMapType, IMapState, MapType } from '@/store/reducers/map/types'

export const initialState: IMapState = {
  banks: null,
  mapError: null,
  searchCurrency: '',
  geo: null,
  mapStatus: RequestStatusType.Idle,
}

export const mapReducer = (state = initialState, action: ActionsMapType): IMapState => {
  switch (action.type) {
    case MapType.SET_BANKS:
      return { ...state, banks: action.payload }

    case MapType.SET_ERROR:
      return { ...state, mapError: action.payload }

    case MapType.SET_SEARCH_CURRENCY:
      return { ...state, searchCurrency: action.payload }

    case MapType.SET_GEO:
      return { ...state, geo: action.payload }

    case MapType.SET_STATUS:
      return { ...state, mapStatus: action.payload }

    default:
      return state
  }
}
