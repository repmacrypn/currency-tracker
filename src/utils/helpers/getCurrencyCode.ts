import { CURRENCIES } from '@/constants/currencies'

export const getCurrencyCode = (currentCode: string | null) => {
  if (currentCode) {
    return CURRENCIES.split(',').find((code) => code === currentCode)
  }

  return null
}
