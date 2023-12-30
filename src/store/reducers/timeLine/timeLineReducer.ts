import { defaultTimelineCurrency } from '@/constants/currencies'
import { RequestStatusType } from '@/store/reducers/app/types'
import {
  ActionsTimelineType,
  ITimeLineState,
  TimelineType,
} from '@/store/reducers/timeLine/types'
import { periodEnum } from '@/types/timeline'

const initialState: ITimeLineState = {
  currencyTimeline: defaultTimelineCurrency,
  period: periodEnum.Month,
  day: null,
  chartData: null,
  timelineError: null,
  timelineStatus: RequestStatusType.Idle,
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

    case TimelineType.SET_ERROR:
      return { ...state, timelineError: action.payload }

    case TimelineType.SET_STATUS:
      return { ...state, timelineStatus: action.payload }

    default:
      return state
  }
}
