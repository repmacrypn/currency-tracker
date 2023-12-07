import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 34px auto;

  @media (max-width: 900px) {
    gap: ${(props) => props.theme.valueInPx.px25};
    width: calc(100% - 30px);
    margin: 34px 15px;
  }

  @media (max-width: 400px) {
    gap: ${(props) => props.theme.valueInPx.px10};
    width: 100%;
    margin: 34px 0;
  }
`

export const Logo = styled.img`
  width: ${(props) => props.theme.valueInPx.px40};
  height: ${(props) => props.theme.valueInPx.px45};
  transition: ${(props) => props.theme.defaultTransition};

  &:active {
    transform: ${(props) => props.theme.defaultTransform};
  }

  @media (max-width: 500px) {
    width: ${(props) => props.theme.valueInPx.px20};
    height: ${(props) => props.theme.valueInPx.px25};
  }
`

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 657px;
  width: 100%;
`

export const NavLinkElem = styled(NavLink)`
  padding: 0 5px;
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: ${(props) => props.theme.colors.fontColor};
  transition: ${(props) => props.theme.defaultTransition};
  text-decoration: none;
  text-align: center;
  will-change: transform;

  &:hover {
    color: ${(props) => props.theme.usedColors.red2};
  }

  &:active {
    transform: ${(props) => props.theme.defaultTransform};
  }

  &.active {
    color: ${(props) => props.theme.usedColors.green1};
    cursor: default;
  }

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }

  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.fontSize.m};
  }
`
