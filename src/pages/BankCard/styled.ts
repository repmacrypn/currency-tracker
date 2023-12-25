import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: ${(props) => props.theme.valueInPx.px40};
  gap: ${(props) => props.theme.valueInPx.px20};
  overflow: hidden;

  @media (max-width: 400px) {
    width: 100%;
  }
`
