import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { Toggler } from '@/components/Toggler'
import { Theme, ThemeContext } from '@/context/ThemeContext'
import { darkTheme, lightTheme } from '@/theme'
import { ThemeEnum } from '@/theme/types'

describe('Toggler', () => {
  test('should be rendered on the page', () => {
    const { getByTestId } = render(
      <Theme>
        <Toggler />
      </Theme>,
    )

    const togglerWrapper = getByTestId('togglerWrapper')
    const toggler = screen.getByTestId('toggler')

    expect(togglerWrapper).toBeInTheDocument()
    expect(toggler).toBeInTheDocument()
  })

  it("should be switched to the dark theme when it's toggled", () => {
    const setTheme = jest.fn()

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={ThemeEnum.light ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme: ThemeEnum.light, setTheme }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    )

    const { getByTestId } = render(<Toggler />, { wrapper })

    const toggler = getByTestId('togglerWrapper')

    fireEvent.click(toggler)

    expect(setTheme).toHaveBeenCalledWith(ThemeEnum.dark)
  })

  it("should be switched to the light theme when it's toggled", () => {
    const setTheme = jest.fn()

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={ThemeEnum.light ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme: ThemeEnum.dark, setTheme }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    )

    const { getByTestId } = render(<Toggler />, { wrapper })

    const toggler = getByTestId('togglerWrapper')

    fireEvent.click(toggler)

    expect(setTheme).toHaveBeenCalledWith(ThemeEnum.light)
  })
})
