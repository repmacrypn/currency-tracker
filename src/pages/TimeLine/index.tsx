import React from 'react'

import { BarChart } from '@/components/ChartComponent'
import { Select } from '@/components/Converter/Select'
import { Hint } from '@/components/Converter/styled'
import { IconDiv } from '@/components/CurrenciesBlock/CurrencyCard/styled'
import { PeriodToggle } from '@/components/PeriodToggler'
import {
  ICommonTimeLine,
  ITimeLineContainer,
  ITimeLineState,
} from '@/components/TimeLineContainer/interfaces'
import { CURRENCIES } from '@/constants/currencies'
import { periodEnum } from '@/types/timeline'
import { getCurrentDay } from '@/utils/helpers/getCurrentDay'
import { getMonthName } from '@/utils/helpers/getMonthName'
import { handleDateControl } from '@/utils/helpers/handleDateControl'

import { Container, SelectBlock } from './styled'

export class TimeLine extends React.PureComponent<ICommonTimeLine, ITimeLineState> {
  currencyOptions = CURRENCIES.split(',').filter(
    (code) => code === 'EUR' || code === 'BTC',
  )

  monthName = getMonthName()

  componentDidMount() {
    this.fetchCurrency()
  }

  componentDidUpdate(prevProps: ITimeLineContainer) {
    const { day, period, currencyTimeline } = this.props
    const {
      day: prevDay,
      period: prevPeriod,
      currencyTimeline: prevCurrencyTimeline,
    } = prevProps

    if (
      prevDay !== day ||
      prevPeriod !== period ||
      prevCurrencyTimeline !== currencyTimeline
    ) {
      this.fetchCurrency()
    }
  }

  fetchCurrency = () => {
    const { day, period, currencyTimeline, fetchCurrencyByDay, fetchCurrencyByMonth } =
      this.props

    if (currencyTimeline && day) {
      fetchCurrencyByDay(currencyTimeline, day)
    }

    if (currencyTimeline && period === periodEnum.Month) {
      const date = handleDateControl(period)
      const month = `${date.year}-${date.month}-${date.day}`

      fetchCurrencyByMonth(currencyTimeline, month)
    }
  }

  handleSelectChange = (currency: string) => {
    const { setChartData, setTimelineCurrency, currencyTimeline } = this.props

    if (currencyTimeline !== currency) {
      setTimelineCurrency(currency)
      setChartData(null)
    }
  }

  handleSelectDayChange = (option: string) => {
    const { setChartData, setDay } = this.props
    const day = getCurrentDay(option)

    setChartData(null)
    setDay(day)
  }

  render() {
    const { chartData, period, currencyTimeline } = this.props

    return (
      <Container>
        <IconDiv className={currencyTimeline || undefined}>{currencyTimeline}</IconDiv>
        <SelectBlock>
          <Hint>Select the currency which you want to display on the Chart</Hint>
          <Select onClick={this.handleSelectChange} value={currencyTimeline || undefined}>
            {this.currencyOptions.map((cur) => (
              <option value={cur} key={cur}>
                {cur}
              </option>
            ))}
          </Select>
        </SelectBlock>
        <SelectBlock>
          <PeriodToggle period={period} />
          {period === periodEnum.Day && (
            <>
              <Hint>Select the date to declare the min diapazon value</Hint>
              <Select onClick={this.handleSelectDayChange} value='1'>
                {handleDateControl().pastDaysArr.map((cur) => (
                  <option value={cur} key={cur}>
                    {cur} {this.monthName}
                  </option>
                ))}
              </Select>
            </>
          )}
        </SelectBlock>
        {chartData && currencyTimeline && (
          <BarChart dataChart={chartData} code={currencyTimeline} />
        )}
      </Container>
    )
  }
}
