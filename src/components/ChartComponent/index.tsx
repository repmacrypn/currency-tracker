import { memo, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { useTheme } from 'styled-components'

import { IBarChart } from '@/components/ChartComponent/interfaces'
import { ChartObserver, Subject } from '@/components/ChartObserver'
import { useAppSelector } from '@/hooks/useStoreControl'
import { selectPeriod } from '@/store/selectors/timelineSelectors'
import { periodEnum } from '@/types/timeline'
import { getConfigChart } from '@/utils/helpers/getConfigChart'

import { Container } from './styled'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarChart = memo(({ dataChart, code }: IBarChart) => {
  const period = useAppSelector(selectPeriod)

  const theme = useTheme()

  const { data, options, plugins } = getConfigChart(dataChart, code, theme)

  useEffect(() => {
    const subject = new Subject(dataChart)
    const observer = new ChartObserver(subject)

    if (period === periodEnum.Month && dataChart) {
      subject.processData()
    }

    return () => {
      observer.unsubscribe()
    }
  }, [period, dataChart])

  return (
    <Container data-testid='chart'>
      <Bar data={data} options={options} plugins={plugins} />
    </Container>
  )
})
