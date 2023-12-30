import { LsKey, ThemeEnum } from '@/theme/types'

export const setThemeToLocalStorage = (key: LsKey, value: ThemeEnum) => {
  localStorage.setItem(key, value)
}

export const getTheme = () => localStorage.getItem('theme') as ThemeEnum
