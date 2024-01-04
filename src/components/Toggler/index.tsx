import { useCallback } from 'react'

import { useTheme } from '@/hooks/useTheme'
import { ThemeEnum } from '@/theme/types'
import { setThemeToLocalStorage } from '@/utils/helpers/accessStorage'

import { Container, ToggleItem } from './styled'

export const Toggler = () => {
  const { theme, setTheme } = useTheme()

  const handleToggleChange = useCallback(() => {
    const rulesTheme = theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light

    setThemeToLocalStorage('theme', rulesTheme)
    setTheme(rulesTheme)
  }, [theme, setTheme])

  return (
    <Container data-testid='togglerWrapper' onClick={handleToggleChange}>
      <ToggleItem data-testid='toggler' $isActive={theme === 'darkTheme'} />
    </Container>
  )
}
