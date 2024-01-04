import { Provider } from 'react-redux'
import { fireEvent, render } from '@testing-library/react'

import { SearchField } from '@/components/SearchField'
import { allBanks, defaultGeo } from '@/constants/testsData'
import { Theme } from '@/context/ThemeContext'
import { BankCard } from '@/pages/BankCard'
import { store } from '@/store'
import { RequestStatusType } from '@/store/reducers/app/types'

describe('Search', () => {
  const searchCurrency = 'BTC'
  const status = RequestStatusType.Succeeded
  const geo = defaultGeo
  const mockfetchGeo = jest.fn()
  const mockfetchBanks = jest.fn()
  const mockSetMapError = jest.fn()
  const mockSetSearchCurrency = jest.fn()

  it('the elements of the BankCard page should be visible', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <BankCard
            banks={allBanks}
            searchCurrency={searchCurrency}
            geo={geo}
            status={status}
            setSearchCurrency={mockSetSearchCurrency}
            setMapError={mockSetMapError}
            fetchGeo={mockfetchGeo}
            fetchBanks={mockfetchBanks}
          />
        </Theme>
      </Provider>,
    )

    const map = getByTestId('map')
    const searchInput = getByTestId('searchInput')

    expect(searchInput).toBeInTheDocument()
    expect(map).toBeInTheDocument()
  })

  it('hints should appear if the input value contains at least one character', async () => {
    const { getByTestId, findByTestId } = render(
      <Provider store={store}>
        <Theme>
          <SearchField />
        </Theme>
      </Provider>,
    )

    const searchInput = getByTestId('searchInput')

    fireEvent.change(searchInput, { target: { value: 'c' } })

    const hints = await findByTestId('hintsList')

    expect(hints).toBeInTheDocument()

    fireEvent.change(searchInput, { target: { value: '' } })
    expect(hints).not.toBeInTheDocument()
  })
})
