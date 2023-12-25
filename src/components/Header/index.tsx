import { LogoIcon } from '@/components/Header/LogoIcon'
import { NavBlock } from '@/components/Header/NavBlock'
import { Menu } from '@/components/Menu'
import { Toggler } from '@/components/Toggler'

import { Container, Wrapper } from './styled'

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoIcon />
        <NavBlock />
        <Toggler />
      </Wrapper>
      <Menu />
    </Container>
  )
}
