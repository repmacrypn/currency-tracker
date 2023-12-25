import { NavLink } from 'react-router-dom'

import miniLogo from '@/assets/images/miniLogo.svg'

import { ILogoIcon } from './interface'
import { Logo } from './styled'

export const LogoIcon = ({ handleLogoClick = () => {} }: ILogoIcon) => {
  return (
    <NavLink onClick={handleLogoClick} to='/home'>
      <Logo alt='mini logo' src={miniLogo} />
    </NavLink>
  )
}
