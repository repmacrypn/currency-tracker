import React from 'react'

import { BarChart } from '@/components/ChartComponent'
import { Select } from '@/components/Converter/Select'
import { IconDiv } from '@/components/CurrenciesBlock/CurrencyCard/styled'
import { Loader } from '@/components/Loader'
import { PeriodToggle } from '@/components/PeriodToggler'
import {
  ICommonTimeLine,
  ITimeLineContainer,
  ITimeLineState,
} from '@/components/TimeLineContainer/interfaces'
import { CURRENCIES } from '@/constants/currencies'
import { RequestStatusType } from '@/store/reducers/app/types'
import { periodEnum } from '@/types/timeline'
import { getCurrentDay } from '@/utils/helpers/getCurrentDay'
import { getMonthName } from '@/utils/helpers/getMonthName'
import { handleDateControl } from '@/utils/helpers/handleDateControl'

import { Container, Hint, SelectBlock } from './styled'

export class TimeLine extends React.PureComponent<ICommonTimeLine, ITimeLineState> {
  currencyOptions = CURRENCIES.split(',')

  monthName = getMonthName()

  dateControl = handleDateControl()

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
    const { chartData, period, currencyTimeline, status } = this.props

    return (
      <Container>
        <IconDiv className={currencyTimeline || undefined} data-testid='currencyIcon'>
          {currencyTimeline}
        </IconDiv>
        <SelectBlock>
          <Hint>
            Select the currency which you want to display on the Chart (BTC and EUR are
            valid)
          </Hint>
          <Select onClick={this.handleSelectChange} value={currencyTimeline || undefined}>
            {this.currencyOptions.map((cur) => (
              <option value={cur} key={cur} data-testid='currencyOption'>
                {cur}
              </option>
            ))}
          </Select>
        </SelectBlock>
        <SelectBlock>
          <PeriodToggle period={period} />
          {period === periodEnum.Day && (
            <>
              <Hint>Select most wanted day to declare a 24 hour Chart range </Hint>
              <Select onClick={this.handleSelectDayChange} value='1'>
                {this.dateControl.pastDaysArr.map((cur) => (
                  <option value={cur} key={cur}>
                    {cur} {this.monthName}
                  </option>
                ))}
              </Select>
            </>
          )}
        </SelectBlock>
        {status === RequestStatusType.Loading && <Loader />}
        {chartData && currencyTimeline && (
          <BarChart dataChart={chartData} code={currencyTimeline} />
        )}
      </Container>
    )
  }
}
