import styled from 'styled-components'

export const Container = styled.ul`
  position: absolute;
  top: ${(props) => props.theme.valueInPx.px75};
  width: 100%;
  max-height: 40vh;
  padding: 10px 10px 10px 5px;
  margin: ${(props) => props.theme.valueInPx.px0};
  background-color: ${(props) => props.theme.colors.banksBG};
  color: ${(props) => props.theme.colors.banksText};
  box-shadow: 0 2px 4px ${(props) => props.theme.colors.boxShadowColor};
  list-style: none;
  overflow-y: auto;
  z-index: 5;

  ::-webkit-scrollbar {
    width: ${(props) => props.theme.valueInPx.px5};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.usedColors.gray1};
    border-radius: ${(props) => props.theme.valueInPx.px5};
  }

  @media (max-width: 992px) {
    top: ${(props) => props.theme.valueInPx.px65};
  }

  @media (max-width: 768px) {
    top: ${(props) => props.theme.valueInPx.px55};
  }
`

export const HintItem = styled.li`
  padding: ${(props) => props.theme.valueInPx.px15};
  font-size: ${(props) => props.theme.fontSize.xl};

  &:hover {
    cursor: pointer;
    transform: translateX(5px);
    color: ${(props) => props.theme.usedColors.white1};
    background-color: ${(props) => props.theme.usedColors.green2};
  }
`

export const EmptyState = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.l};
`
