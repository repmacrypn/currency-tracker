import styled from 'styled-components'

import { bgColors } from '@/components/CurrenciesBlock/CurrencyCard/styled'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: ${(props) => props.theme.valueInPx.px20} ${(props) => props.theme.valueInPx.px0};
  min-height: 30vh;

  ${bgColors}

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 10px;
  }
`

export const SelectBlock = styled.div`
  max-width: 400px;
  width: 100%;
`

export const Hint = styled.p`
  margin-top: 15px;
  font-size: ${(props) => props.theme.fontSize.xl};
  line-height: 1.4;
`
