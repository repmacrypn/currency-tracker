import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: ${(props) => props.theme.valueInPx.px40};
  gap: ${(props) => props.theme.valueInPx.px20};
  overflow: hidden;

  .mapboxgl-map {
    @media (max-width: 400px) {
      width: 93vw !important;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    padding: 0 10px;
  }
`
