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
import { getCurrencyCode } from '@/utils/helpers/getCurrencyCode'
import { handleDateControl } from '@/utils/helpers/handleDateControl'

import { Container, SelectBlock } from './styled'

export class TimeLine extends React.PureComponent<ICommonTimeLine, ITimeLineState> {
  currencyOptions = CURRENCIES.split(',').filter(
    (code) => code === 'EUR' || code === 'BTC',
  )

  constructor(props: ICommonTimeLine) {
    super(props)
    const { currencyTimeline } = this.props

    this.state = {
      code: getCurrencyCode(currencyTimeline),
    }
  }

  componentDidMount() {
    this.fetchCurrency()
  }

  componentDidUpdate(prevProps: ITimeLineContainer) {
    const { day, period, currencyTimeline } = this.props

    if (prevProps.day !== day || prevProps.period !== period) {
      this.fetchCurrency()
    }
    if (prevProps.currencyTimeline !== currencyTimeline) {
      this.setState({
        code: currencyTimeline,
      })
    }
  }

  fetchCurrency = () => {
    const { day, period, fetchCurrencyByDay, fetchCurrencyByMonth } = this.props
    const { code } = this.state

    if (code && day) {
      fetchCurrencyByDay(code, day)
    }

    if (code && period === periodEnum.Month) {
      const date = handleDateControl(period)
      const month = `${date.year}-${date.month}-${date.day}`

      fetchCurrencyByMonth(code, month)
    }
  }

  handleSelectChange = (currency: string) => {
    const { setChartData, setTimelineCurrency } = this.props

    setTimelineCurrency(currency)
    setChartData(null)
  }

  handleSelectDayChange = (option: string) => () => {
    const { setChartData, setDay } = this.props

    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = `0${currentDate.getMonth() + 1}`.slice(-2)
    const day = `0${option}`.slice(-2)

    setChartData(null)
    setDay(`${year}-${month}-${day}`)
  }

  render() {
    const { code } = this.state
    const { chartData, period } = this.props

    return (
      <Container>
        <IconDiv>{code}</IconDiv>
        <SelectBlock>
          <Hint>Select the currency which you want to display on the Chart</Hint>
          <Select onClick={this.handleSelectChange} placeholder='Currancy...'>
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
              <Select onClick={this.handleSelectDayChange} placeholder='Day...'>
                {handleDateControl().pastDaysArr.map((cur) => (
                  <option value={cur} key={cur}>
                    {cur}
                  </option>
                ))}
              </Select>
            </>
          )}
        </SelectBlock>
        {chartData && code && <BarChart dataChart={chartData} code={code} />}
      </Container>
    )
  }
}
