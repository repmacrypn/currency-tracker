import { ICurrencyStocks } from '@/types/currencies'
import bovespaIcon from '@/assets/images/bovespaIcon.svg'
import IFIXicon from '@/assets/images/IFIXicon.svg'

export const CURRENCIES = 'USD,ARS,CAD,JPY,AUD,CNY,EUR,BTC,TRY'

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
