import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.valueInPx.px30};
  width: 90%;

  @media (max-width: 768px) {
    gap: ${(props) => props.theme.valueInPx.px50};
  }
`
