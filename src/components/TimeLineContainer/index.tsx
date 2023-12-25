import React from 'react'
import { connect } from 'react-redux'

import { ErrorText } from '@/components/ErrorBoundary/ErrorFallback/styled'
import {
  IMapDispatchToProps,
  IMapStateToProps,
  ITimeLineContainer,
} from '@/components/TimeLineContainer/interfaces'
import { TimeLine } from '@/pages/TimeLine'
import {
  setChartData,
  setDay,
  setTimelineCurrency,
} from '@/store/actions/timeLineActions'
import { fetchCurrencyByDay, fetchCurrencyByMonth } from '@/store/thunks/timeLineThunks'
import { RootStoreType } from '@/store/types'

class TimeLineContainer extends React.Component<ITimeLineContainer> {
  render() {
    const { error, ...rest } = this.props

    return error ? (
      <ErrorText>Oops, something went wrong... {error}</ErrorText>
    ) : (
      <TimeLine {...rest} />
    )
  }
}

const mapStateToProps = (state: RootStoreType): IMapStateToProps => {
  return {
    currencyTimeline: state.timeline.currencyTimeline,
    period: state.timeline.period,
    day: state.timeline.day,
    chartData: state.timeline.chartData,
    error: state.app.appError,
  }
}

const mapDispatchToProps: IMapDispatchToProps = {
  setTimelineCurrency,
  setChartData,
  setDay,
  fetchCurrencyByDay,
  fetchCurrencyByMonth,
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineContainer)
