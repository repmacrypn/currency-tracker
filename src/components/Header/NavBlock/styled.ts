import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 657px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    max-width: auto;
  }
`

export const NavLinkElem = styled(NavLink)`
  padding: 4px 0;
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: ${(props) => props.theme.colors.fontColor};
  transition: ${(props) => props.theme.defaultTransition};
  text-decoration: none;
  text-align: center;

  &:hover {
    transition: ${(props) => props.theme.defaultTransition};
    color: ${(props) => props.theme.usedColors.green1};
  }

  &:active {
    transform: ${(props) => props.theme.defaultTransform};
  }

  &.active {
    transition: border-color 0.3s ease;
    border-bottom: 2px solid ${(props) => props.theme.usedColors.green1};
    cursor: default;
  }

  @media (max-width: 600px) {
    border-bottom: 2px solid ${(props) => props.theme.colors.mainBG};

    &.active {
      transition: border-color 0.3s ease;
    }
  }
`
