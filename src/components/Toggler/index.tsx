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
    <Container onClick={handleToggleChange}>
      <ToggleItem $themeValue={theme} />
    </Container>
  )
}
