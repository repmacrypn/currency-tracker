import { FC, memo, useCallback } from 'react'

import { Container, ToggleItem } from '@/components/Toggler/styled'
import { useAppDispatch } from '@/hooks/useStoreControl'
import { setChartData, setDay, setPeriod } from '@/store/actions/timeLineActions'
import { periodEnum } from '@/types/timeline'
import { getCurrentDay } from '@/utils/helpers/getCurrentDay'

import { IPeriodToggle } from './interface'
import { TogglerContainer } from './styled'

export const PeriodToggle: FC<IPeriodToggle> = memo(({ period }) => {
  const dispatch = useAppDispatch()

  const handleToggleChange = useCallback(() => {
    const currentPeriod = period === periodEnum.Day ? periodEnum.Month : periodEnum.Day
    const day = getCurrentDay()

    if (period === periodEnum.Day) {
      dispatch(setDay(null))
    } else {
      dispatch(setDay(day))
    }

    dispatch(setChartData(null))
    dispatch(setPeriod(currentPeriod))
  }, [dispatch, period])

  return (
    <TogglerContainer>
      {period === periodEnum.Month ? 'Month' : 'Day'}
      <Container onClick={handleToggleChange} data-cy='periodToggler'>
        <ToggleItem $isActive={period !== periodEnum.Day} />
      </Container>
    </TogglerContainer>
  )
})
