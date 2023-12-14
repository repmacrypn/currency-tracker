import { RootStoreType } from '@/store/types'

export const selectSearchCurrency = (state: RootStoreType) => state.map.searchCurrency
