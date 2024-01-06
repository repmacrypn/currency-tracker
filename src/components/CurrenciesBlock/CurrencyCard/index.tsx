import { memo } from 'react'

import { useAppDispatch } from '@/hooks/useStoreControl'
import { setModal } from '@/store/actions/appActions'
import { setCurrencyFrom } from '@/store/actions/homeActions'

import { ICurrencyCard } from './interface'
import { Card, Container, IconDiv, IconImg, Price, Title, Wrapper } from './styled'

export const CurrencyCard = memo(({ src, symbol, name, price, code }: ICurrencyCard) => {
  const dispatch = useAppDispatch()

  const onCurrencyCardClick = (currencyCode: string | null) => () => {
    if (symbol) {
      dispatch(setCurrencyFrom(currencyCode))
      dispatch(setModal(true))
    }
  }

  return (
    <Card>
      <Container data-cy='currencyCard' onClick={onCurrencyCardClick(code || null)}>
        {src ? (
          <IconImg src={src} alt='icon' />
        ) : (
          <IconDiv className={code}>{symbol || 'None'}</IconDiv>
        )}
        <Wrapper>
          <Title>{name || 'None'}</Title>
          <Price>{price || 0.0}</Price>
        </Wrapper>
      </Container>
    </Card>
  )
})
