import styled from 'styled-components'

import { bgColors } from '@/components/CurrenciesBlock/CurrencyCard/styled'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: ${(props) => props.theme.valueInPx.px20} ${(props) => props.theme.valueInPx.px0};
  min-height: 30vh;

  ${bgColors}
`

export const SelectBlock = styled.div`
  max-width: 40%;
`

export const Hint = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xl};
`
