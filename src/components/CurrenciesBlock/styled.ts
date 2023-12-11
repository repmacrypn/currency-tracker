import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;
`

export const Title = styled.h4`
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.light};
  margin-bottom: ${(props) => props.theme.valueInPx.px20};
`

export const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: ${(props) => props.theme.valueInPx.px150};

  @media (max-width: 1100px) {
    gap: ${(props) => props.theme.valueInPx.px30};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.valueInPx.px15};
  }
`
