import { IBank, IBanksData } from '@/types/bank'
import { IGeoCity, IMapGeo } from '@/types/city'

export interface IBankCardContainer extends IMapStateToProps, IMapDispatchToProps {}

export interface IBankCard extends Omit<IBankCardContainer, 'error'> {}

export interface IMapStateToProps {
  banks: IBanksData | null
  error: string | null
  searchCurrency: string
  geo: IMapGeo | null
}

export interface IMapDispatchToProps {
  setSearchCurrency: (currency: string) => void
  fetchBanks: (city: IGeoCity) => void
  fetchGeo: () => void
}

export interface IBankCardState {
  selectedBank: IBank | null
  overview: {
    longitude: number
    latitude: number
    zoom: number
  }
}
