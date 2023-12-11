import { useMemo } from 'react'

import { CurrenciesBlock } from '@/components/CurrenciesBlock'
import { CurrencyCard } from '@/components/CurrenciesBlock/CurrencyCard'
import { CURRENCIES, currencyStocks } from '@/constants/currencies'
import { useCacheControl } from '@/hooks/useCacheControl'
import { useAppSelector } from '@/hooks/useStoreControl'
import {
  selectCurrencyPrices,
  selectCurrencyValues,
} from '@/store/selectors/homeSelectors'

import { Container } from './styled'

export const Home = () => {
  const currencyValues = useAppSelector(selectCurrencyValues)
  const currencyPrices = useAppSelector(selectCurrencyPrices)

  const currencies = useMemo(() => CURRENCIES.split(','), [])

  useCacheControl()

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
              code={currentCurrency?.code}
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
