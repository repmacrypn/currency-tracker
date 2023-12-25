import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
  }
`

export const MenuContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.valueInPx.px10};
  position: fixed;
  top: ${(props) => props.theme.valueInPx.px0};
  right: ${(props) => props.theme.valueInPx.px0};
  height: 100vh;
  width: 100%;
  max-width: 420px;
  padding: 20px 10px;
  z-index: 10;
  box-shadow: 4px 0 20px 0 ${(props) => props.theme.colors.boxShadowColor};
  color: ${(props) => props.theme.colors.fontColor};
  background-color: ${(props) => props.theme.colors.mainBG};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: ${(props) => props.theme.defaultTransition};

  @media (max-width: 420px) {
    box-shadow: none;
  }
`

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: ${(props) => props.theme.valueInPx.px45};
  }
`
