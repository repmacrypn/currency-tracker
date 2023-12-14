import {
  ActionsTimelineType,
  ITimeLineState,
  TimelineType,
} from '@/store/reducers/timeLine/types'
import { periodEnum } from '@/types/timeline'

const initialState: ITimeLineState = {
  currencyTimeline: 'EUR',
  period: periodEnum.Month,
  day: null,
  chartData: null,
}

export const timeLineReducer = (
  state = initialState,
  action: ActionsTimelineType,
): ITimeLineState => {
  switch (action.type) {
    case TimelineType.SET_TIMELINE_CURRENCY:
      return { ...state, currencyTimeline: action.payload }

    case TimelineType.SET_PERIOD:
      return { ...state, period: action.payload }

    case TimelineType.SET_DAY:
      return { ...state, day: action.payload }

    case TimelineType.SET_CHART_DATA:
      return { ...state, chartData: action.payload }

    default:
      return state
  }
}
