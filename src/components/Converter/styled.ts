import styled from 'styled-components'

import { bgColors } from '@/components/CurrenciesBlock/CurrencyCard/styled'

export const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ${bgColors}
`

export const Item = styled.div`
  padding: ${(props) => props.theme.valueInPx.px15};
  font-size: ${(props) => props.theme.fontSize.xl};
`

export const Hint = styled.div`
  margin: ${(props) => props.theme.valueInPx.px15} ${(props) => props.theme.valueInPx.px0};
  line-height: 1.2;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.l};
`

export const ConverterValue = styled.div`
  margin-bottom: ${(props) => props.theme.valueInPx.px30};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
`
