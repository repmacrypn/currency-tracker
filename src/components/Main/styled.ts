import styled, { keyframes } from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const LogoBlock = styled.section`
  display: flex;
  padding: 35px 45px;
  width: 100%;
  background: ${(props) => props.theme.colors.logoGradient};

  @media (max-width: 582px) {
    padding: 35px 15px;
  }

  @media (max-width: 400px) {
    padding: 35px 0;
  }
`

export const LogoDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LogoTitle = styled.h3<{ $isHuge?: boolean }>`
  align-self: flex-end;
  max-width: 750px;
  padding-right: ${({ $isHuge }) =>
    $isHuge
      ? (props) => props.theme.valueInPx.px60
      : (props) => props.theme.valueInPx.px75};
  font-size: ${({ $isHuge }) =>
    $isHuge
      ? (props) => props.theme.fontSize.xl11
      : (props) => props.theme.fontSize.xl10};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  background-image: ${(props) => props.theme.usedColors.textGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: right;
  line-height: 1.2;

  @media (max-width: 1100px) {
    font-size: ${({ $isHuge }) =>
      $isHuge
        ? (props) => props.theme.fontSize.xl10
        : (props) => props.theme.fontSize.xl9};
  }

  @media (max-width: 900px) {
    font-size: ${({ $isHuge }) =>
      $isHuge
        ? (props) => props.theme.fontSize.xl9
        : (props) => props.theme.fontSize.xl8};
  }

  @media (max-width: 730px) {
    font-size: ${({ $isHuge }) =>
      $isHuge
        ? (props) => props.theme.fontSize.xl8
        : (props) => props.theme.fontSize.xl4};
  }

  @media (max-width: 522px) {
    align-self: flex-start;
    text-align: left;
    padding-right: ${(props) => props.theme.valueInPx.px15};
    font-size: ${({ $isHuge }) =>
      $isHuge
        ? (props) => props.theme.fontSize.xl4
        : (props) => props.theme.fontSize.xxll};
  }

  @media (max-width: 356px) {
    font-size: ${({ $isHuge }) =>
      $isHuge
        ? (props) => props.theme.fontSize.xxll
        : (props) => props.theme.fontSize.xxl};
  }
`

export const LogoInfo = styled.p`
  align-self: flex-end;
  max-width: 400px;
  margin-top: auto;
  margin-right: -30px;
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: ${(props) => props.theme.fontWeight.light};
  text-align: center;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.timeUpdater};

  @media (max-width: 730px) {
    font-size: ${(props) => props.theme.fontSize.l};
    margin-right: 15px;
    text-align: right;
  }

  @media (max-width: 522px) {
    font-size: ${(props) => props.theme.fontSize.m};
    margin-right: 15px;
    text-align: right;
  }

  @media (max-width: 400px) {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`

export const Logo = styled.img`
  max-width: 280px;
  width: 100%;
  background-size: contain;

  @media (max-width: 1100px) {
    max-width: 240px;
  }

  @media (max-width: 900px) {
    max-width: 200px;
  }

  @media (max-width: 730px) {
    max-width: 160px;
  }

  @media (max-width: 522px) {
    max-width: 120px;
  }
`

export const DateBlock = styled.div`
  display: flex;
  gap: ${(props) => props.theme.valueInPx.px20};
  padding: 50px 0;
`

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 ${(props) => props.theme.usedColors.green2};
  }
  70% {
    box-shadow: 0 0 0 10px rgba(53, 185, 26, 0.2);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(53, 185, 26, 0);
  }
`

export const Pulse = styled.div`
  width: ${(props) => props.theme.valueInPx.px20};
  height: ${(props) => props.theme.valueInPx.px20};
  border-radius: 50%;
  background-color: ${(props) => props.theme.usedColors.green1};
  box-shadow: 0 0 0 0 ${(props) => props.theme.colors.pulse};
  animation: ${pulse} 2s ease-in-out infinite;
`

export const DateText = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: ${(props) => props.theme.colors.timeUpdater};
`
