import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
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

export const Text = styled.p`
  font-weight: ${(props) => props.theme.fontWeight.light};
  font-size: ${(props) => props.theme.fontSize.xxl};
  color: ${(props) => props.theme.colors.timeUpdater};
`
