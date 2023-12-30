import mainLogo from '@/assets/images/mainLogo.svg'
import { DateBlock } from '@/components/Main/DateBlock'
import { Pages } from '@/routes'

import {
  Container,
  Logo,
  LogoBlock,
  LogoDescription,
  LogoInfo,
  LogoTitle,
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
      <DateBlock />
      <Pages />
    </Container>
  )
}
