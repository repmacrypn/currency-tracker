import styled from 'styled-components'

export const Container = styled.div`
  flex-shrink: 0;
  position: relative;
  width: 50px;
  height: 28px;
  z-index: 5;
  background-color: ${(props) => props.theme.colors.togglerBackColor};
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.togglerBorderColor};
  border-radius: 28px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 30px;
    height: 18px;
  }
`

export const ToggleItem = styled.div<{ $isActive: boolean }>`
  position: absolute;
  left: -2px;
  top: -1px;
  width: 27px;
  height: 27px;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.togglerBorderColor};
  border-radius: 50%;
  transform: translateX(${({ $isActive }) => ($isActive ? '0px' : '23px')});
  transition: transform 0.3s ease;

  @media (max-width: 500px) {
    width: 16px;
    height: 16px;
    left: -1px;
    transform: translateX(${({ $isActive }) => (!$isActive ? '0px' : '14px')});
  }
`
