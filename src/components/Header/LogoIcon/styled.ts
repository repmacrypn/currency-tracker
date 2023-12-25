import styled from 'styled-components'

export const Logo = styled.img`
  width: ${(props) => props.theme.valueInPx.px40};
  height: ${(props) => props.theme.valueInPx.px45};
  transition: ${(props) => props.theme.defaultTransition};

  &:active {
    transform: ${(props) => props.theme.defaultTransform};
  }
`
