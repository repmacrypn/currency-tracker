import styled from 'styled-components'

import { website } from '@/constants/footerData'

export const Container = styled.footer`
  padding-top: ${(props) => props.theme.valueInPx.px20};
`

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  width: 90%;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
    padding: 0 15px;
  }

  @media (max-width: 744px) {
    flex-wrap: wrap;
  }

  @media (max-width: 402px) {
    padding: 0;
  }
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: ${(props) => props.theme.valueInPx.px480};
  width: 100%;

  @media (max-width: 744px) {
    align-items: center;
    max-width: 100%;
    margin: 0 auto;
  }
`

export const LogoBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.theme.valueInPx.px10};
`

export const Logo = styled.img`
  width: ${(props) => props.theme.valueInPx.px30};
  height: ${(props) => props.theme.valueInPx.px35};
`

export const LogoTitleFooter = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: ${(props) => props.theme.usedColors.textGradient};

  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`

export const InfoText = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: ${(props) => props.theme.fontSize.xl};
  line-height: 1.5;

  @media (max-width: 744px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.fontSize.l};
  }
`

export const AboutBlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  align-items: flex-start;
  width: 50%;
  gap: 50px;
  padding-top: 6px;

  @media (max-width: 744px) {
    width: 100%;
  }

  @media (max-width: 378px) {
    gap: 20px;
  }
`

export const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const AboutBlockTitle = styled.h3`
  font-weight: ${(props) => props.theme.fontWeight.normal};
  margin-bottom: ${(props) => props.theme.valueInPx.px40};
  font-size: ${(props) => props.theme.fontSize.xxl};
`

export const AboutBlockLink = styled.a.attrs({
  href: website,
  target: '_blank',
})`
  display: block;
  margin-bottom: ${(props) => props.theme.valueInPx.px25};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  color: ${(props) => props.theme.colors.footerLinks};
  transition: ${(props) => props.theme.defaultTransition};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.usedColors.green1};
    transform: translateX(5px);
  }
`

export const RightsInfoBlock = styled.h3`
  padding: 55px 0 40px 0;
  text-align: center;
  font-family: ${(props) => props.theme.font[1]};
  font-size: ${(props) => props.theme.fontSize.xxl};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  color: ${(props) => props.theme.colors.footerCopyright};

  @media (max-width: 590px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`
