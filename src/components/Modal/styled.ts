import styled from 'styled-components'

export const Container = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: ${(props) => props.theme.valueInPx.px0};
  left: ${(props) => props.theme.valueInPx.px0};
  right: ${(props) => props.theme.valueInPx.px0};
  bottom: ${(props) => props.theme.valueInPx.px0};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  pointer-events: ${({ $isActive }) => ($isActive ? 'all' : 'none')};
  background-color: ${(props) => props.theme.usedColors.black4};
  transition: ${(props) => props.theme.defaultTransition};
  z-index: 3;
  cursor: default;
`

export const Content = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 65%;
  padding: ${(props) => props.theme.valueInPx.px20};
  border-radius: ${(props) => props.theme.valueInPx.px8};
  color: ${(props) => props.theme.colors.fontColor};
  background-color: ${(props) => props.theme.colors.mainBG};
  transform: ${({ $isActive }) => ($isActive ? 'scale(1)' : 'scale(0.5)')};
  transition: ${(props) => props.theme.defaultTransition};

  @media (max-width: 992px) {
    width: 80%;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`
