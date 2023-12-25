import { useRef, useState } from 'react'

import { BurgerMenu } from '@/components/BurgerMenu'
import { LogoIcon } from '@/components/Header/LogoIcon'
import { NavBlock } from '@/components/Header/NavBlock'
import { Toggler } from '@/components/Toggler'
import { useOutsideClick } from '@/hooks/useOutsideClick'

import { Container, MenuContent, Wrapper } from './styled'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuNode = useRef<HTMLDivElement>(null)

  useOutsideClick(menuNode, () => setIsOpen(false))

  return (
    <Container ref={menuNode}>
      <BurgerMenu isOpen={isOpen} handleMenuClick={() => setIsOpen(!isOpen)} />
      <MenuContent $isOpen={isOpen}>
        <Wrapper>
          <LogoIcon handleLogoClick={() => setIsOpen(false)} />
          <Toggler />
        </Wrapper>
        <NavBlock handleNavItemClick={() => setIsOpen(false)} />
      </MenuContent>
    </Container>
  )
}
