import {
  setChartData,
  setDay,
  setPeriod,
  setTimelineCurrency,
} from '@/store/actions/timeLineActions'
import { ICurrencyTimeline, periodEnum } from '@/types/timeline'

export interface ITimeLineState {
  currencyTimeline: string | null
  period: periodEnum
  day: string | null
  chartData: ICurrencyTimeline[] | null
}

export enum TimelineType {
  SET_TIMELINE_CURRENCY = 'TIMELINE/SET_TIMELINE_CURRENCY',
  SET_PERIOD = 'TIMELINE/SET_PERIOD',
  SET_DAY = 'TIMELINE/SET_DAY',
  SET_CHART_DATA = 'TIMELINE/SET_CHART_DATA',
}

export type ActionsTimelineType =
  | ReturnType<typeof setTimelineCurrency>
  | ReturnType<typeof setPeriod>
  | ReturnType<typeof setDay>
  | ReturnType<typeof setChartData>
