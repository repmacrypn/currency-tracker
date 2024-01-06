import { memo } from 'react'

import { CURRENCIES } from '@/constants/currencies'
import { getCurrencyBySearch } from '@/utils/helpers/getCurrencyBySearch'

import { IHintBlock } from './interface'
import { Container, EmptyState, HintItem } from './styled'

export const HintBlock = memo(({ searchValue, onClick }: IHintBlock) => {
  const hintsData = getCurrencyBySearch(searchValue, CURRENCIES)

  const onHintItemClick = (code: string) => () => {
    onClick(code)
  }

  return (
    <Container data-cy='hintsList' data-testid='hintsList'>
      {hintsData.length > 0 ? (
        hintsData?.map((code) => {
          return (
            <HintItem key={code} onClick={onHintItemClick(code)}>
              {code}
            </HintItem>
          )
        })
      ) : (
        <EmptyState data-cy='hintsEmptyState'>No currencies were found...</EmptyState>
      )}
    </Container>
  )
})
