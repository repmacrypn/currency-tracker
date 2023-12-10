import mainLogo from '@/assets/images/mainLogo.svg'
import { Pages } from '@/routes'

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
        <DateText>Last updated at 11:59</DateText>
      </DateBlock>
      <Pages />
    </Container>
  )
}
