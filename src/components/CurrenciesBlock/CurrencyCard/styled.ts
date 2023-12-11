import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.valueInPx.px30};
  padding: 30px 32px 30px 32px;
  background-color: ${(props) => props.theme.colors.currencyCardBG};
  border-radius: ${(props) => props.theme.valueInPx.px10};
  border: 1px solid ${(props) => props.theme.colors.currencyCardBorder};
  transition: ${(props) => props.theme.defaultTransition};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    box-shadow: 0 2px 3px 16px ${(props) => props.theme.usedColors.gray1};
  }

  &:active {
    transform: ${(props) => props.theme.defaultTransform};
  }

  @media (max-width: 1100px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    padding: 12px;
    max-width: none;
  }
`

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.valueInPx.px80};
  height: ${(props) => props.theme.valueInPx.px80};
  font-size: ${(props) => props.theme.fontSize.xl4};
  font-weight: ${(props) => props.theme.fontWeight.normal};

  @media (max-width: 1100px) {
    width: ${(props) => props.theme.valueInPx.px50};
    height: ${(props) => props.theme.valueInPx.px50};
    font-size: ${(props) => props.theme.fontSize.xxl};
  }

  @media (max-width: 768px) {
    width: ${(props) => props.theme.valueInPx.px30};
    height: ${(props) => props.theme.valueInPx.px30};
    font-size: ${(props) => props.theme.fontSize.l};
  }
`

export const IconImg = styled.img`
  width: ${(props) => props.theme.valueInPx.px80};
  height: ${(props) => props.theme.valueInPx.px80};

  @media (max-width: 1100px) {
    width: ${(props) => props.theme.valueInPx.px50};
    height: ${(props) => props.theme.valueInPx.px50};
  }

  @media (max-width: 768px) {
    width: ${(props) => props.theme.valueInPx.px30};
    height: ${(props) => props.theme.valueInPx.px30};
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.valueInPx.px10};
`

export const Title = styled.div`
  color: ${(props) => props.theme.colors.currencyCardTitle};
  font-size: ${(props) => props.theme.fontSize.xxll};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  line-height: 1.4;
  transition: ${(props) => props.theme.defaultTransition};

  @media (max-width: 1100px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.l};
  }
`

export const Price = styled.div`
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: ${(props) => props.theme.fontWeight.light};
  color: ${(props) => props.theme.colors.currencyCardPrice};
  transition: ${(props) => props.theme.defaultTransition};
  line-height: 1.2;

  @media (max-width: 1100px) {
    font-size: ${(props) => props.theme.fontSize.l};
  }

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.m};
  }
`
