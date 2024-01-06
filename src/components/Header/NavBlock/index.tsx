import { links } from '@/constants/links'

import { INavBlock } from './interface'
import { Container, NavLinkElem } from './styled'

export const NavBlock = ({ handleNavItemClick = () => {} }: INavBlock) => {
  return (
    <Container>
      {links.map((link) => (
        <NavLinkElem
          data-cy={link.to}
          onClick={handleNavItemClick}
          key={link.to}
          to={link.to}
        >
          {link.label}
        </NavLinkElem>
      ))}
    </Container>
  )
}
