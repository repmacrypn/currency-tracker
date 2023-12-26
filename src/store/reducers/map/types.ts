import {
  setBanks,
  setGeoPosition,
  setMapError,
  setSearchCurrency,
} from '@/store/actions/mapActions'
import { IBanksData } from '@/types/bank'
import { IMapGeo } from '@/types/city'

export interface IMapState {
  banks: IBanksData | null
  mapError: string | null
  searchCurrency: string
  geo: IMapGeo | null
}

export enum MapType {
  SET_ERROR = 'MAP/SET_ERROR',
  SET_BANKS = 'MAP/SET_BANKS',
  SET_SEARCH_CURRENCY = 'MAP/SET_SEARCH_CURRENCY',
  SET_GEO = 'MAP/SET_GEO',
}

export type ActionsMapType =
  | ReturnType<typeof setBanks>
  | ReturnType<typeof setMapError>
  | ReturnType<typeof setSearchCurrency>
  | ReturnType<typeof setGeoPosition>
