import styled from 'styled-components'

export const Card = styled.div`
  &:not(:first-of-type) {
    position: relative;
    top: -40px;
  }

  &:nth-of-type(2) {
    position: relative;
    top: 0px;
  }

  &:first-of-type {
    position: relative;
    top: -40px;
    padding-top: ${(props) => props.theme.valueInPx.px40};
    border-top: 2px solid ${(props) => props.theme.colors.hrColor};
  }

  @media (max-width: 768px) {
    &:not(:first-of-type) {
      position: static;
    }

    &:nth-of-type(2) {
      position: static;
    }

    &:first-of-type {
      position: static;
      padding-top: ${(props) => props.theme.valueInPx.px40};
      border-top: 2px solid ${(props) => props.theme.colors.hrColor};
    }
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.valueInPx.px30};
  padding: 30px 32px;
  background-color: ${(props) => props.theme.colors.currencyCardBG};
  border-radius: ${(props) => props.theme.valueInPx.px10};
  border: 1px solid ${(props) => props.theme.colors.currencyCardBorder};
  transition: ${(props) => props.theme.defaultTransition};
  will-change: transform;

  .USD {
    background-color: ${(props) => props.theme.usedColors.green2};
  }

  .ARS {
    background-color: ${(props) => props.theme.usedColors.brown1};
  }

  .CAD {
    background-color: ${(props) => props.theme.usedColors.red1};
  }

  .JPY {
    background-color: ${(props) => props.theme.usedColors.gray4};
  }

  .AUD {
    background-color: ${(props) => props.theme.usedColors.blue1};
  }

  .CNY {
    background-color: ${(props) => props.theme.usedColors.gray5};
  }

  .EUR {
    background-color: ${(props) => props.theme.usedColors.blue2};
  }

  .BTC {
    background-color: ${(props) => props.theme.usedColors.brown2};
  }

  .TRY {
    background-color: ${(props) => props.theme.usedColors.red3};
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    box-shadow: 0 0 14px 1px ${(props) => props.theme.colors.boxShadowColor};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 1100px) {
    padding: ${(props) => props.theme.valueInPx.px30};
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
  font-weight: ${(props) => props.theme.fontWeight.light};
  color: ${(props) => props.theme.usedColors.white1};
  border-radius: ${(props) => props.theme.valueInPx.px8};

  @media (max-width: 1100px) {
    width: ${(props) => props.theme.valueInPx.px50};
    height: ${(props) => props.theme.valueInPx.px50};
    font-size: ${(props) => props.theme.fontSize.xxl};
  }

  @media (max-width: 768px) {
    width: ${(props) => props.theme.valueInPx.px40};
    height: ${(props) => props.theme.valueInPx.px40};
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
    width: ${(props) => props.theme.valueInPx.px40};
    height: ${(props) => props.theme.valueInPx.px40};
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
