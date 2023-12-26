import { ActionsMapType, IMapState, MapType } from '@/store/reducers/map/types'

const initialState: IMapState = {
  banks: null,
  mapError: null,
  searchCurrency: '',
  geo: null,
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

    default:
      return state
  }
}
