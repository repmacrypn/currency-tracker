import { useEffect, useMemo } from 'react'

import { CurrenciesBlock } from '@/components/CurrenciesBlock'
import { CurrencyCard } from '@/components/CurrenciesBlock/CurrencyCard'
import { CURRENCIES, currencyStocks } from '@/constants/currencies'
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl'
import {
  selectCurrencyPrices,
  selectCurrencyValues,
} from '@/store/selectors/homeSelectors'
import { fetchCurrencies } from '@/store/thunks/homeThunks'

import { Container } from './styled'

export const Home = () => {
  const dispatch = useAppDispatch()

  const currencyValues = useAppSelector(selectCurrencyValues)
  const currencyPrices = useAppSelector(selectCurrencyPrices)

  const currencies = useMemo(() => CURRENCIES.split(','), [])

  useEffect(() => {
    dispatch(fetchCurrencies())
  }, [dispatch])

  return (
    <Container>
      <CurrenciesBlock title='Stocks'>
        {currencyStocks.map(({ img, name, value }) => (
          <CurrencyCard key={name} src={img} name={name} price={value} />
        ))}
      </CurrenciesBlock>
      <CurrenciesBlock title='Quotes'>
        {currencies.map((currency, index) => {
          const currentCurrency = currencyValues?.data[currency]

          return (
            <CurrencyCard
              key={index}
              symbol={currentCurrency?.symbol}
              name={currentCurrency?.name}
              price={currencyPrices?.data[currency].value}
            />
          )
        })}
      </CurrenciesBlock>
    </Container>
  )
}
