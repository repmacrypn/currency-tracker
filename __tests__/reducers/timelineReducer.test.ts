import { defaultCurrencyTimelineData } from '@/constants/testsData'
import {
  setChartData,
  setDay,
  setPeriod,
  setTimelineCurrency,
  setTimelineError,
  setTimelineStatus,
} from '@/store/actions/timeLineActions'
import { RequestStatusType } from '@/store/reducers/app/types'
import { initialState, timeLineReducer } from '@/store/reducers/timeLine/timeLineReducer'
import { TimelineType } from '@/store/reducers/timeLine/types'
import { periodEnum } from '@/types/timeline'

describe('timelineReducer', () => {
  const state = initialState

  it(`should handle ${TimelineType.SET_CHART_DATA}`, () => {
    const currencyTimelineData = defaultCurrencyTimelineData
    const action = setChartData(currencyTimelineData)
    const newState = timeLineReducer(state, action)

    expect(newState.chartData).toEqual(currencyTimelineData)
  })

  it(`should handle ${TimelineType.SET_PERIOD}`, () => {
    const period = periodEnum.Day
    const action = setPeriod(period)
    const newState = timeLineReducer(state, action)

    expect(newState.period).toEqual(period)
  })

  it(`should handle ${TimelineType.SET_DAY}`, () => {
    const day = '2024-01-01'
    const action = setDay(day)
    const newState = timeLineReducer(state, action)

    expect(newState.day).toEqual(day)
  })

  it(`should handle ${TimelineType.SET_TIMELINE_CURRENCY}`, () => {
    const timelineCurrency = 'EUR'
    const action = setTimelineCurrency(timelineCurrency)
    const newState = timeLineReducer(state, action)

    expect(newState.currencyTimeline).toEqual(timelineCurrency)
  })

  it(`should handle ${TimelineType.SET_ERROR}`, () => {
    const error = 'Oops, something went wrong...'
    const action = setTimelineError(error)
    const newState = timeLineReducer(state, action)

    expect(newState.timelineError).toEqual(error)
  })

  it(`should handle ${TimelineType.SET_STATUS}`, () => {
    const status = RequestStatusType.Succeeded
    const action = setTimelineStatus(status)
    const newState = timeLineReducer(state, action)

    expect(newState.timelineStatus).toEqual(status)
  })
})

describe('setTimelineCurrency', () => {
  it('should create an action to set the timeline currency', () => {
    const payload = 'ETH'
    const expectedAction = {
      type: TimelineType.SET_TIMELINE_CURRENCY,
      payload,
    }

    expect(setTimelineCurrency(payload)).toEqual(expectedAction)
  })
})

describe('setPeriod', () => {
  it('should create an action to set the timeline period', () => {
    const payload = periodEnum.Month
    const expectedAction = {
      type: TimelineType.SET_PERIOD,
      payload,
    }

    expect(setPeriod(payload)).toEqual(expectedAction)
  })
})

describe('setDay', () => {
  it('should create an action to set the timeline day', () => {
    const payload = '2024-01-01'
    const expectedAction = {
      type: TimelineType.SET_DAY,
      payload,
    }

    expect(setDay(payload)).toEqual(expectedAction)
  })
})

describe('setChartData', () => {
  it('should create an action to set the timeline chart data', () => {
    const payload = defaultCurrencyTimelineData
    const expectedAction = {
      type: TimelineType.SET_CHART_DATA,
      payload,
    }

    expect(setChartData(payload)).toEqual(expectedAction)
  })
})

describe('setTimelineError', () => {
  it('should create an action to set the timeline error', () => {
    const payload = 'Oops, something went wrong...'
    const expectedAction = {
      type: TimelineType.SET_ERROR,
      payload,
    }

    expect(setTimelineError(payload)).toEqual(expectedAction)
  })
})

describe('setTimelineStatus', () => {
  it('should create an action to set the timeline status', () => {
    const payload = RequestStatusType.Succeeded
    const expectedAction = {
      type: TimelineType.SET_STATUS,
      payload,
    }

    expect(setTimelineStatus(payload)).toEqual(expectedAction)
  })
})
