import styled from 'styled-components'

export const Container = styled.header`
  width: 90%;
  margin: 34px auto;

  @media (max-width: 900px) {
    width: calc(100% - 20px);
    margin: 34px 10px;
  }
`

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 900px) {
    gap: ${(props) => props.theme.valueInPx.px25};
  }

  @media (max-width: 600px) {
    display: none;
  }
`
