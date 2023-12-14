import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  position: relative;
`

export const InputItem = styled.input`
  width: 100%;
  height: ${(props) => props.theme.valueInPx.px65};
  position: relative;
  padding: 20px;
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-family: inherit;
  border-radius: ${(props) => props.theme.valueInPx.px6};
  transition: ${(props) => props.theme.defaultTransition};
  color: ${(props) => props.theme.colors.banksText};
  border: 1px solid ${(props) => props.theme.colors.currencyCardBorder};
  background: url('../../assets/images/searchIcon.svg') 98% no-repeat
    ${(props) => props.theme.colors.banksBG};

  &:hover {
    border-color: ${(props) => props.theme.usedColors.green1};
  }

  &:focus {
    border-color: ${(props) => props.theme.usedColors.green1};
    outline: none;
  }

  @media (max-width: 992px) {
    padding: ${(props) => props.theme.valueInPx.px15};
    height: ${(props) => props.theme.valueInPx.px55};
  }

  @media (max-width: 768px) {
    padding: ${(props) => props.theme.valueInPx.px10};
    height: ${(props) => props.theme.valueInPx.px45};
  }
`
