import { ICurrencyTimeline } from '@/types/timeline'

export interface IBarChart {
  dataChart: ICurrencyTimeline[]
  code: string
}

export interface IData {
  datasets: [
    {
      label: string
      data: IDataElem[]
      backgroundColor: (ctx: any) => string
      borderColor: string
      borderWidth: number
      maxBarThickness: number
      borderSkipped: boolean
      barPercentage: number
      minBarLength: number
    },
  ]
}

export interface IDataElem {
  x: string | null
  o: number
  h: number
  l: number
  c: number
  s: number[]
}
