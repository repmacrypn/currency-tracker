import { Provider } from 'react-redux'
import { fireEvent, render } from '@testing-library/react'

import { Theme } from '@/context/ThemeContext'
import { TimeLine } from '@/pages/TimeLine'
import { store } from '@/store'
import { RequestStatusType } from '@/store/reducers/app/types'
import { periodEnum } from '@/types/timeline'

describe('TimeLine', () => {
  const currencyTimeline = 'BTC'
  const day = '2024-01-01'
  const period = periodEnum.Day
  const status = RequestStatusType.Succeeded
  const chartData = null
  const mockFetchCurrencyByDay = jest.fn()
  const mockFetchCurrencyByMonth = jest.fn()
  const mockSetTimelineError = jest.fn()
  const mockSetDay = jest.fn()
  const mockSetTimeLineCurrency = jest.fn()
  const mockSetChartData = jest.fn()

  const timelineComponent = (
    <TimeLine
      currencyTimeline={currencyTimeline}
      period={period}
      day={day}
      chartData={chartData}
      status={status}
      setTimelineCurrency={mockSetTimeLineCurrency}
      setChartData={mockSetChartData}
      setTimelineError={mockSetTimelineError}
      setDay={mockSetDay}
      fetchCurrencyByDay={mockFetchCurrencyByDay}
      fetchCurrencyByMonth={mockFetchCurrencyByMonth}
    />
  )

  it('initially, the page should display a currency select field, a period toggler and a currency icon', () => {
    const { getByTestId, getAllByTestId } = render(
      <Provider store={store}>
        <Theme>{timelineComponent}</Theme>
      </Provider>,
    )

    const currencySelectOptions = getAllByTestId('currencyOption')
    const periodToggler = getByTestId('toggler')
    const currencyIcon = getByTestId('currencyIcon')

    expect(currencySelectOptions.length).toBe(9)
    expect(periodToggler).toBeInTheDocument()
    expect(currencyIcon).toBeInTheDocument()
  })

  it('the request should be sent on toggler click', () => {
    const { getByTestId, getAllByText } = render(
      <Provider store={store}>
        <Theme>{timelineComponent}</Theme>
      </Provider>,
    )

    const currencyInPage = 'BTC'
    const periodToggler = getByTestId('toggler')

    fireEvent.click(periodToggler)

    expect(mockFetchCurrencyByDay).toHaveBeenCalledTimes(2)
    expect(getAllByText(currencyInPage).length).toBe(2)
    expect(getAllByText(currencyInPage)[0]).toBeInTheDocument()
  })

  it('the request should be sent on select field change', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <Theme>{timelineComponent}</Theme>
      </Provider>,
    )

    const currencySelectOptions = getAllByTestId('currencyOption')

    fireEvent.click(currencySelectOptions[7])

    expect(mockFetchCurrencyByDay).toHaveBeenCalledTimes(3)
  })
})
