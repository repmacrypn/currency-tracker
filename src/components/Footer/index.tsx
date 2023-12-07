import miniLogo from '@/assets/images/miniLogo.svg'
import { footerData } from '@/constants/footerData'

import {
  AboutBlock,
  AboutBlockLink,
  AboutBlockTitle,
  AboutBlockWrapper,
  Container,
  InfoBlock,
  InfoText,
  Logo,
  LogoBlock,
  LogoTitleFooter,
  RightsInfoBlock,
  Wrapper,
} from './styled'

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InfoBlock>
          <LogoBlock>
            <Logo alt='minilogo' src={miniLogo} />
            <LogoTitleFooter>Modsen Currency Tracker</LogoTitleFooter>
          </LogoBlock>
          <InfoText>
            Since then, the company has grown organically to. Startup is the worlds
            largest trading platform, with $12 billion worth of currency trading and
            500,000 tickets sold daily to tens of thousands of traders worldwide.
          </InfoText>
        </InfoBlock>
        <AboutBlockWrapper>
          {footerData.map(({ block, links }) => {
            return (
              <AboutBlock key={block}>
                <AboutBlockTitle>{block}</AboutBlockTitle>
                {links.map((link) => (
                  <AboutBlockLink key={link}>{link}</AboutBlockLink>
                ))}
              </AboutBlock>
            )
          })}
        </AboutBlockWrapper>
      </Wrapper>
      <RightsInfoBlock>Startup © 2023-2024, All Rights Reserved</RightsInfoBlock>
    </Container>
  )
}
