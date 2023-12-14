import { MapType } from '@/store/reducers/map/types'
import { IBanksData } from '@/types/bank'
import { IMapGeo } from '@/types/city'

export const setBanks = (payload: IBanksData) =>
  ({
    type: MapType.SET_BANKS,
    payload,
  }) as const

export const setMapError = (payload: string | null) =>
  ({
    type: MapType.SET_ERROR,
    payload,
  }) as const

export const setSearchCurrency = (payload: string) =>
  ({
    type: MapType.SET_SEARCH_CURRENCY,
    payload,
  }) as const

export const setGeoPosition = (payload: IMapGeo) =>
  ({
    type: MapType.SET_GEO,
    payload,
  }) as const
