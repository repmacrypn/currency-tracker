import { RequestStatusType } from '@/store/reducers/app/types'
import { TimelineType } from '@/store/reducers/timeLine/types'
import { ICurrencyTimeline, periodEnum } from '@/types/timeline'

export const setTimelineCurrency = (payload: string) =>
  ({
    type: TimelineType.SET_TIMELINE_CURRENCY,
    payload,
  }) as const

export const setPeriod = (payload: periodEnum) =>
  ({
    type: TimelineType.SET_PERIOD,
    payload,
  }) as const

export const setDay = (payload: string | null) =>
  ({
    type: TimelineType.SET_DAY,
    payload,
  }) as const

export const setChartData = (payload: ICurrencyTimeline[] | null) =>
  ({
    type: TimelineType.SET_CHART_DATA,
    payload,
  }) as const

export const setTimelineError = (payload: string | null) =>
  ({
    type: TimelineType.SET_ERROR,
    payload,
  }) as const

export const setTimelineStatus = (payload: RequestStatusType) =>
  ({
    type: TimelineType.SET_STATUS,
    payload,
  }) as const
