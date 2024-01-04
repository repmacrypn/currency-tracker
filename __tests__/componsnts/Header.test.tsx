import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { render } from '@testing-library/react'

import { Header } from '@/components/Header'
import { PATH } from '@/constants/path'
import { Theme } from '@/context/ThemeContext'
import { Contacts } from '@/pages/Contacts'
import { store } from '@/store'

describe('Header', () => {
  it('renders navigation links', () => {
    const { getAllByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <Theme>
            <Header />
          </Theme>
        </Provider>
      </MemoryRouter>,
    )

    const homeLinks = getAllByText('Home')

    homeLinks.forEach((l) => {
      expect(l).toHaveAttribute('href', PATH.HOME)
    })

    const timelineLinks = getAllByText('Timeline')

    timelineLinks.forEach((l) => {
      expect(l).toHaveAttribute('href', PATH.TIMELINE)
    })

    const bankCardLinks = getAllByText('Bank card')

    bankCardLinks.forEach((l) => {
      expect(l).toHaveAttribute('href', PATH.BANK_CARD)
    })

    const contactsLinks = getAllByText('Contacts')

    contactsLinks.forEach((l) => {
      expect(l).toHaveAttribute('href', PATH.CONTACTS)
    })
  })
  it('opens Contacts when "Contacts" link is clicked', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[PATH.CONTACTS]}>
        <Provider store={store}>
          <Theme>
            <Header />
            <Contacts />
          </Theme>
        </Provider>
      </MemoryRouter>,
    )

    expect(getByText('Contact us:')).toBeInTheDocument()
  })
})
