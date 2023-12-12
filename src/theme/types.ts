export enum ThemeEnum {
  light = 'lightTheme',
  dark = 'darkTheme',
}

export interface IThemeContext {
  theme: ThemeEnum
  setTheme: (theme: ThemeEnum) => void
}

export type LsKey = 'theme'

export interface ITheme {
  colors: {
    fontColor: string
    mainBG: string
    navLinkColor: string
    togglerBorderColor: string
    togglerBackColor: string
    timeUpdater: string
    currencyCardBG: string
    currencyCardBorder: string
    currencyCardTitle: string
    currencyCardPrice: string
    banksBG: string
    banksText: string
    banksTitle: string
    modalBG: string
    modalBGWrapper: string
    modalTitle: string
    modalText: string
    modalBorder: string
    contactsText: string
    contactsTitle: string
    timelineSelect: string
    timelineSelectBG: string
    timelinePriceText: string
    footerTitle: string
    footerText: string
    footerLinks: string
    footerCopyright: string
    logoGradient: string
    hrColor: string
    boxShadowColor: string
    pulse: string
    selectBorder: string
    selectBG: string
    symbolBG1: string
    symbolBG2: string
    symbolBG3: string
    symbolBG4: string
    symbolBG5: string
    symbolBG6: string
    symbolBG7: string
    symbolBG8: string
    symbolBG9: string
    symbolBG10: string
  }
  usedColors: IColors
  font: string[]
  fontSize: {
    sm: string
    m: string
    l: string
    xl: string
    xxl: string
    xxll: string
    xxxl: string
    xl4: string
    xl8: string
    xl9: string
    xl10: string
    xl11: string
  }
  fontWeight: {
    light: number
    normal: number
    medium: number
    semibold: number
    bold: number
  }
  valueInPx: {
    px0: string
    px2: string
    px3: string
    px5: string
    px8: string
    px10: string
    px15: string
    px20: string
    px25: string
    px30: string
    px35: string
    px40: string
    px45: string
    px50: string
    px55: string
    px60: string
    px65: string
    px70: string
    px75: string
    px80: string
    px100: string
    px150: string
    px200: string
    px250: string
    px300: string
    px350: string
    px370: string
    px400: string
    px450: string
    px480: string
  }
  defaultTransition: string
  defaultTransform: string
}

export interface IColors {
  black1: string
  black2: string
  black3: string
  black4: string
  white1: string
  white2: string
  white3: string
  green1: string
  green2: string
  green3: string
  green4: string
  green5: string
  red1: string
  red2: string
  red3: string
  gray1: string
  gray2: string
  gray3: string
  gray4: string
  gray5: string
  brown1: string
  brown2: string
  blue1: string
  blue2: string
  textGradient: string
  logoGradientLight: string
  logoGradientDark: string
}
