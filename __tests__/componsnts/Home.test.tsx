import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { Theme } from '@/context/ThemeContext'
import { Home } from '@/pages/Home'
import { store } from '@/store'

describe('Home', () => {
  it('there should be a block with currency cards on the page', () => {
    const { queryAllByTestId } = render(
      <Provider store={store}>
        <Theme>
          <Home />
        </Theme>
      </Provider>,
    )

    const currenciesBlock = queryAllByTestId('currenciesBlock')

    currenciesBlock.forEach((c) => {
      expect(c).toBeInTheDocument()
    })
  })
})
