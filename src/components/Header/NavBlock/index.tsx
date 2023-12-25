import { links } from '@/constants/links'

import { Container, NavLinkElem } from './styled'

export const NavBlock = () => {
  return (
    <Container>
      {links.map((link) => (
        <NavLinkElem key={link.to} to={link.to}>
          {link.label}
        </NavLinkElem>
      ))}
    </Container>
  )
}
