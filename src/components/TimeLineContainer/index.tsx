import React from 'react'
import { connect } from 'react-redux'

import { ErrorText } from '@/components/ErrorText'
import {
  IMapDispatchToProps,
  IMapStateToProps,
  ITimeLineContainer,
} from '@/components/TimeLineContainer/interfaces'
import { defaultTimelineCurrency } from '@/constants/currencies'
import { TimeLine } from '@/pages/TimeLine'
import {
  setChartData,
  setDay,
  setTimelineCurrency,
  setTimelineError,
} from '@/store/actions/timeLineActions'
import { fetchCurrencyByDay, fetchCurrencyByMonth } from '@/store/thunks/timeLineThunks'
import { RootStoreType } from '@/store/types'

class TimeLineContainer extends React.Component<ITimeLineContainer> {
  componentWillUnmount(): void {
    const { error, setTimelineError, setTimelineCurrency } = this.props

    if (error) {
      setTimelineError(null)
      setTimelineCurrency(defaultTimelineCurrency)
    }
  }

  render() {
    const { error } = this.props

    return error ? <ErrorText>{error}</ErrorText> : <TimeLine {...this.props} />
  }
}

const mapStateToProps = (state: RootStoreType): IMapStateToProps => {
  return {
    currencyTimeline: state.timeline.currencyTimeline,
    period: state.timeline.period,
    day: state.timeline.day,
    chartData: state.timeline.chartData,
    error: state.timeline.timelineError,
    status: state.timeline.timelineStatus,
  }
}

const mapDispatchToProps: IMapDispatchToProps = {
  setTimelineCurrency,
  setChartData,
  setTimelineError,
  setDay,
  fetchCurrencyByDay,
  fetchCurrencyByMonth,
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineContainer)
