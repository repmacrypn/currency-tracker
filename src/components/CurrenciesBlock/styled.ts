import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
`

export const Title = styled.h4`
  font-size: ${(props) => props.theme.fontSize.xxll};
  font-weight: ${(props) => props.theme.fontWeight.light};
  margin-bottom: ${(props) => props.theme.valueInPx.px80};

  @media (max-width: 768px) {
    margin-bottom: ${(props) => props.theme.valueInPx.px40};
  }
`

export const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  row-gap: ${(props) => props.theme.valueInPx.px50};
  column-gap: ${(props) => props.theme.valueInPx.px150};
  position: relative;

  @media (max-width: 1100px) {
    gap: ${(props) => props.theme.valueInPx.px30};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.valueInPx.px25};
  }
`
