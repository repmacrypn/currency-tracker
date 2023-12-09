import { NavLink } from 'react-router-dom'

import miniLogo from '@/assets/images/miniLogo.svg'
import { Toggler } from '@/components/Toggler'
import { links } from '@/constants/links'

import { Container, Logo, NavLinkElem, NavWrapper } from './styled'

export const Header = () => {
  return (
    <Container>
      <NavLink to='/home'>
        <Logo alt='mini logo' src={miniLogo} />
      </NavLink>
      <NavWrapper>
        {links.map((link) => (
          <NavLinkElem key={link.to} to={link.to}>
            {link.label}
          </NavLinkElem>
        ))}
      </NavWrapper>
      <Toggler />
    </Container>
  )
}
