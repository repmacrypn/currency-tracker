import { defaultTimeDate } from '@/constants/currencies'
import { useAppSelector } from '@/hooks/useStoreControl'
import { selectCurrencyPrices } from '@/store/selectors/homeSelectors'

import { Container, Pulse, Text } from './styled'

export const DateBlock = () => {
  const currencyPrices = useAppSelector(selectCurrencyPrices)

  const date = new Date(
    currencyPrices?.meta.last_updated_at || defaultTimeDate,
  ).toLocaleTimeString()

  return (
    <Container>
      <Pulse />
      <Text>Last updated at {date}</Text>
    </Container>
  )
}
