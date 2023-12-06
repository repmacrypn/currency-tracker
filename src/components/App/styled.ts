import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, body {
        height: 100%;
        width: 100%;
        padding: ${(props) => props.theme.valueInPx.px0};
        margin: ${(props) => props.theme.valueInPx.px0};
        box-sizing: border-box;
        overflow-x: hidden;
        font-family: ${(props) => props.theme.font[0]};
        font-weight: 400;
        font-size: 100%;
        line-height: 1;
        border: 0;
        scroll-behavior: smooth;
        background-color: ${(props) => props.theme.colors.mainBG};
        color: ${(props) => props.theme.colors.fontColor};
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;

        &,
        &::before,
        &::after {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
    }

    :focus,
    :active {
        outline: none;
    }

    input,
    button,
    textarea {
        font-family: inherit;
    }

    &::-webkit-scrollbar {
        width: ${(props) => props.theme.valueInPx.px5};
    }

    &::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.usedColors.white2};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.usedColors.green1};
        border-radius: ${(props) => props.theme.valueInPx.px5};
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${(props) => props.theme.usedColors.gray1};
    }
`

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  transition: all 0.3s ease;
`
