import { IBank } from '@/types/bank'

export interface IMarkerControl {
  currentBanks: IBank[] | undefined
  selectedBank: IBank | null
  setSelectedBank: (bank: IBank | null) => void
}
