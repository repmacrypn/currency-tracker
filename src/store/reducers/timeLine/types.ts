import {
  setChartData,
  setDay,
  setPeriod,
  setTimelineCurrency,
  setTimelineError,
  setTimelineStatus,
} from '@/store/actions/timeLineActions'
import { RequestStatusType } from '@/store/reducers/app/types'
import { ICurrencyTimeline, periodEnum } from '@/types/timeline'

export interface ITimeLineState {
  currencyTimeline: string | null
  period: periodEnum
  day: string | null
  chartData: ICurrencyTimeline[] | null
  timelineError: string | null
  timelineStatus: RequestStatusType
}

export enum TimelineType {
  SET_TIMELINE_CURRENCY = 'TIMELINE/SET_TIMELINE_CURRENCY',
  SET_PERIOD = 'TIMELINE/SET_PERIOD',
  SET_DAY = 'TIMELINE/SET_DAY',
  SET_CHART_DATA = 'TIMELINE/SET_CHART_DATA',
  SET_ERROR = 'TIMELINE/SET_ERROR',
  SET_STATUS = 'TIMELINE/SET_STATUS',
}

export type ActionsTimelineType =
  | ReturnType<typeof setTimelineCurrency>
  | ReturnType<typeof setPeriod>
  | ReturnType<typeof setDay>
  | ReturnType<typeof setChartData>
  | ReturnType<typeof setTimelineError>
  | ReturnType<typeof setTimelineStatus>
