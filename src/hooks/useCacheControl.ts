import { useEffect } from 'react'

import { defaultTimePeriod } from '@/constants/common'
import { useAppDispatch } from '@/hooks/useStoreControl'
import { getCurrencyPrices, getCurrencyValues } from '@/store/actions/homeActions'
import { fetchCurrencies } from '@/store/thunks/homeThunks'

export const useCacheControl = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const cachedCurrencyValues = localStorage.getItem('currencyValues')
    const cachedCurrencyPrices = localStorage.getItem('currencyPrices')
    const cachedCurrencyTimestamp = localStorage.getItem('currencyTimestamp')

    if (cachedCurrencyValues && cachedCurrencyPrices && cachedCurrencyTimestamp) {
      const currentTime = new Date().getTime()
      const cachedTime = new Date(JSON.parse(cachedCurrencyTimestamp)).getTime()
      const timeLeft = currentTime - cachedTime

      if (timeLeft < defaultTimePeriod) {
        dispatch(getCurrencyValues(JSON.parse(cachedCurrencyValues)))
        dispatch(getCurrencyPrices(JSON.parse(cachedCurrencyPrices)))
      } else dispatch(fetchCurrencies())
    } else dispatch(fetchCurrencies())
  }, [dispatch])
}
