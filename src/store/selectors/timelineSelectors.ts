import { RootStoreType } from '@/store/types'

export const selectPeriod = (state: RootStoreType) => state.timeline.period
