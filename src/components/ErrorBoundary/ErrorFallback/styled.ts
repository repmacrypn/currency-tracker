import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Poppins', sans-serif;
`

export const Button = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  margin: 20px auto 0;
  border-radius: 6px;
  border: none;
  font-weight: 400;
  font-size: 24px;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 206, 44);
  text-align: center;
  will-change: transform;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.9);
    border-radius: 25px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.4;
  }

  @media (max-width: 480px) {
    height: 30px;
    font-size: 16px;
    border-radius: 12px;
  }
`
