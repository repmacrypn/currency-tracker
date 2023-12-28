import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.valueInPx.px30};
  width: 90%;

  @media (max-width: 400px) {
    width: 100%;
    padding: 0 10px;
  }
`

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xl8};
  font-weight: ${(props) => props.theme.fontWeight.light};

  @media (max-width: 540px) {
    font-size: ${(props) => props.theme.fontSize.xl4};
  }
`

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.valueInPx.px30};
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.xxll};
  font-weight: ${(props) => props.theme.fontWeight.light};

  @media (max-width: 540px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`

export const DataBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.valueInPx.px10};

  @media (max-width: 738px) {
    margin: 0 auto;
    text-align: center;
  }
`

export const LinksBlock = styled.div`
  display: flex;
  align-self: center;
  gap: ${(props) => props.theme.valueInPx.px10};
  margin-top: ${(props) => props.theme.valueInPx.px30};

  @media (max-width: 738px) {
    margin: 0 auto;
  }
`

export const DataLink = styled.a.attrs((props) => ({
  href: props.href,
}))`
  display: inline-block;
  color: ${(props) => props.theme.colors.fontColor};
  transition: ${(props) => props.theme.defaultTransition};

  &:hover {
    opacity: 0.6;
  }

  &:active {
    transform: ${(props) => props.theme.defaultTransform};
  }
`

export const MediaLink = styled.a.attrs((props) => ({
  href: props.href,
  rel: 'noreferrer',
  target: '_blank',
}))`
  display: inline-block;
  width: ${(props) => props.theme.valueInPx.px30};
  height: ${(props) => props.theme.valueInPx.px30};
  transition: ${(props) => props.theme.defaultTransition};

  &:hover {
    opacity: 0.6;
  }

  &:active {
    transform: ${(props) => props.theme.defaultTransform};
  }
`

export const MediaImg = styled.img.attrs((props) => ({
  alt: props.alt,
  src: props.src,
}))`
  display: block;
  width: 100%;
  height: 100%;
`
