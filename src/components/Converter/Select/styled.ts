import styled from 'styled-components'

export const Container = styled.select`
  width: 100%;
  padding: 15px 10px;
  margin: ${(props) => props.theme.valueInPx.px15} 0
    ${(props) => props.theme.valueInPx.px30};
  border: 1px solid ${(props) => props.theme.colors.selectBorder};
  color: ${(props) => props.theme.colors.fontColor};
  background-color: ${(props) => props.theme.colors.selectBG};
  border-radius: ${(props) => props.theme.valueInPx.px8};
  transition: ${(props) => props.theme.defaultTransition};
  font: inherit;

  &:hover {
    border-color: ${(props) => props.theme.colors.selectBG};
  }
`
