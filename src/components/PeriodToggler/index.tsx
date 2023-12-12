import { FC, memo, useCallback } from 'react'

import { useAppDispatch } from '@/hooks/useStoreControl'
import { setChartData, setDay, setPeriod } from '@/store/actions/timeLineActions'
import { periodEnum } from '@/types/timeline'

import { Container, ToggleItem } from '../Toggler/styled'

import { IPeriodToggle } from './interface'
import { TogglerContainer } from './styled'

export const PeriodToggle: FC<IPeriodToggle> = memo(({ period }) => {
  const dispatch = useAppDispatch()

  const handleToggleChange = useCallback(() => {
    const currentPeriod = period === periodEnum.Day ? periodEnum.Month : periodEnum.Day

    if (period === periodEnum.Day) {
      dispatch(setDay(null))
    }
    dispatch(setChartData(null))
    dispatch(setPeriod(currentPeriod))
  }, [dispatch, period])

  return (
    <TogglerContainer>
      {period === periodEnum.Month ? 'Month' : 'Day'}
      <Container onClick={handleToggleChange}>
        <ToggleItem $isActive={period !== periodEnum.Day} />
      </Container>
    </TogglerContainer>
  )
})