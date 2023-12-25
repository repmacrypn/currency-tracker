import styled from 'styled-components'

export const Container = styled.div<{ $isOpen: boolean }>`
  display: none;

  :first-child {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translate(0, 4px) rotate(-45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
  }

  :nth-child(3) {
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translate(0, -12px) rotate(45deg)' : 'rotate(0)'};
  }

  div {
    position: relative;
    width: ${({ $isOpen }) => ($isOpen ? '32px' : '26px')};
    height: 3px;
    background-color: ${(props) => props.theme.usedColors.green1};
    margin: 5px 0;
    z-index: 12;
    transition: all 0.3s linear;
  }

  @media (max-width: 600px) {
    display: block;
    position: ${({ $isOpen }) => ($isOpen ? 'fixed' : 'relative')};
    top: ${({ $isOpen }) => ($isOpen ? '34px' : '0')};
    cursor: pointer;
    z-index: 11;
    background: transparent;
  }
`
