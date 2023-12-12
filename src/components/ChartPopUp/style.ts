import styled from 'styled-components'

import { colors } from '@/theme'

export const Container = styled.div`
  pointer-events: all;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  top: 10%;
  left: 0;
  transition: all 0.3s ease;
  z-index: 3;
`

export const PopUpItem = styled.div`
  max-width: 70vw;
  max-height: 20vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  pointer-events: all;
  background-color: ${colors.green1};
  transition: all 0.3s ease;
`
