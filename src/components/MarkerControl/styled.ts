import styled from 'styled-components'

export const LocationImg = styled.img`
  width: ${(props) => props.theme.valueInPx.px30};
  height: ${(props) => props.theme.valueInPx.px30};
`

export const PopupBlock = styled.section`
  min-width: ${(props) => props.theme.valueInPx.px150};
  color: ${(props) => props.theme.usedColors.black1};
`

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  margin-bottom: ${(props) => props.theme.valueInPx.px10};
`

export const Description = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-family: ${(props) => props.theme.font[1]};
  font-size: ${(props) => props.theme.fontSize.sm};
`
