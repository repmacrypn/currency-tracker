import { NavLink } from 'react-router-dom'

import miniLogo from '@/assets/images/miniLogo.svg'

import { Logo } from './styled'

export const LogoIcon = () => {
  return (
    <NavLink to='/home'>
      <Logo alt='mini logo' src={miniLogo} />
    </NavLink>
  )
}
