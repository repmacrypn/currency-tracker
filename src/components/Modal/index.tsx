import { Converter } from '@/components/Converter'
import { defaultTimelineCurrency } from '@/constants/currencies'
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl'
import { setModal } from '@/store/actions/appActions'
import { setCurrencyFrom, setCurrencyTo } from '@/store/actions/homeActions'
import { selectIsModalOpen } from '@/store/selectors/appSelectors'
import { selectConvertFrom, selectCurrencyValues } from '@/store/selectors/homeSelectors'

import { Container, Content } from './styled'

export const Modal = () => {
  const dispatch = useAppDispatch()

  const selectedCurrency = useAppSelector(selectConvertFrom)
  const currencyValues = useAppSelector(selectCurrencyValues)
  const isModalOpen = useAppSelector(selectIsModalOpen)

  const currentCurrency =
    currencyValues?.data[selectedCurrency || defaultTimelineCurrency]

  const handleModalClose = () => {
    dispatch(setModal(false))
    dispatch(setCurrencyFrom(null))
    dispatch(setCurrencyTo(null))
  }

  return (
    <Container data-testid='modal' $isActive={isModalOpen} onClick={handleModalClose}>
      <Content $isActive={isModalOpen} onClick={(e) => e.stopPropagation()}>
        {currentCurrency ? <Converter currentCurrency={currentCurrency} /> : null}
      </Content>
    </Container>
  )
}
