import { useMemo } from 'react'

import { CurrenciesBlock } from '@/components/CurrenciesBlock'
import { CurrencyCard } from '@/components/CurrenciesBlock/CurrencyCard'
import { ErrorText } from '@/components/ErrorBoundary/ErrorFallback/styled'
import { Loader } from '@/components/Loader'
import { Modal } from '@/components/Modal'
import { CURRENCIES, currencyStocks } from '@/constants/currencies'
import { useCacheControl } from '@/hooks/useCacheControl'
import { useAppSelector } from '@/hooks/useStoreControl'
import { RequestStatusType } from '@/store/reducers/app/types'
import {
  selectAppError,
  selectAppStatus,
  selectIsModalOpen,
} from '@/store/selectors/appSelectors'
import {
  selectCurrencyPrices,
  selectCurrencyValues,
} from '@/store/selectors/homeSelectors'

import { Container } from './styled'

export const Home = () => {
  const currencyValues = useAppSelector(selectCurrencyValues)
  const currencyPrices = useAppSelector(selectCurrencyPrices)
  const isModalOpen = useAppSelector(selectIsModalOpen)
  const status = useAppSelector(selectAppStatus)
  const error = useAppSelector(selectAppError)

  const currencies = useMemo(() => CURRENCIES.split(','), [])

  useCacheControl()

  if (status === RequestStatusType.Loading) return <Loader />
  if (error) return <ErrorText>Oops, something went wrong... {error}</ErrorText>

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
      {isModalOpen && <Modal />}
    </Container>
  )
}
