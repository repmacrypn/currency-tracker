import mainLogo from '@/assets/images/mainLogo.svg'
import { useAppSelector } from '@/hooks/useStoreControl'
import { Pages } from '@/routes'
import { selectCurrencyPrices } from '@/store/selectors/homeSelectors'

import {
  Container,
  DateBlock,
  DateText,
  Logo,
  LogoBlock,
  LogoDescription,
  LogoInfo,
  LogoTitle,
  Pulse,
} from './styled'

export const Main = () => {
  const currencyPrices = useAppSelector(selectCurrencyPrices)

  const date = new Date(
    currencyPrices?.meta.last_updated_at || '2023-12-10T23:59:59Z',
  ).toLocaleTimeString()

  return (
    <Container>
      <LogoBlock>
        <LogoDescription>
          <LogoTitle>Modsen Currency</LogoTitle>
          <LogoTitle $isHuge>Tracker</LogoTitle>
          <LogoInfo>Quotes for the dollar and other international currencies</LogoInfo>
        </LogoDescription>
        <Logo alt='main logo' src={mainLogo} />
      </LogoBlock>
      <DateBlock>
        <Pulse />
        <DateText>Last updated at {date}</DateText>
      </DateBlock>
      <Pages />
    </Container>
  )
}
