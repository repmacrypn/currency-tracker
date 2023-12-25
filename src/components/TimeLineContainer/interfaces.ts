import { ICurrencyTimeline, periodEnum } from '@/types/timeline'

export interface ITimeLineContainer extends IMapStateToProps, IMapDispatchToProps {}

export interface ICommonTimeLine extends Omit<ITimeLineContainer, 'error'> {}

export interface ITimeLineState {
  code: string | null | undefined
}

export interface IMapStateToProps {
  currencyTimeline: string | null
  period: periodEnum
  day: string | null
  chartData: ICurrencyTimeline[] | null
  error: string | null
}

export interface IMapDispatchToProps {
  setTimelineCurrency: (currency: string) => void
  setChartData: (data: ICurrencyTimeline[] | null) => void
  setDay: (option: string) => void
  fetchCurrencyByDay: (code: string, day: string) => void
  fetchCurrencyByMonth: (code: string, month: string) => void
}
