import { ICurrencyStocks } from '@/types/currencies'
import bovespaIcon from '@/assets/images/bovespaIcon.svg'
import IFIXicon from '@/assets/images/IFIXicon.svg'

export const CURRENCIES = 'USD,ARS,CAD,JPY,AUD,CNY,EUR,BTC,TRY'

export const defaultTimelineCurrency = 'EUR'

export const defaultPeriodId = '1DAY'
export const defaultTimeStart = 'T00:00:00'
export const defaultTimeEnd = 'T23:59:59'
export const defaultTimeDate = '2023-12-10T23:59:59Z'

export const currencyStocks: ICurrencyStocks[] = [
  {
    name: 'Bovespa Index',
    value: '0.15%',
    img: bovespaIcon,
  },
  {
    name: 'IFIX',
    value: '0.15%',
    img: IFIXicon,
  },
]
