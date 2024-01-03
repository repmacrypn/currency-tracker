import { IBanksData } from '@/types/bank'
import { ICurrencyPrices, ICurrencyValues } from '@/types/currencies'
import { ICurrencyTimeline } from '@/types/timeline'

export const defaultCurrencyPrices: ICurrencyPrices = {
  meta: { last_updated_at: '2024-01-01' },
  data: {
    USD: { code: 'USD', value: 1 },
    EUR: { code: 'EUR', value: 0.85 },
    GBP: { code: 'GBP', value: 0.72 },
  },
}

export const defaultCurrencyValues: ICurrencyValues = {
  data: {
    ARS: {
      symbol: 'AR$',
      name: 'Argentine Peso',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'ARS',
      name_plural: 'Argentine pesos',
    },
    CNY: {
      symbol: 'CN¥',
      name: 'Chinese Yuan',
      symbol_native: 'CN¥',
      decimal_digits: 2,
      rounding: 0,
      code: 'CNY',
      name_plural: 'Chinese yuan',
    },
    BTC: {
      symbol: '₿',
      name: 'Bitcoin',
      symbol_native: '₿',
      decimal_digits: 8,
      rounding: 0,
      code: 'BTC',
      name_plural: 'Bitcoins',
    },
  },
}

export const defaultBanks: IBanksData = {
  results: [
    {
      fsq_id: '123',
      categories: [{ id: 1, name: 'bank', icon: { prefix: '', suffix: '' } }],
      chains: [],
      distance: 1.23,
      geocodes: { main: { latitude: 1.23, longitude: 4.56 } },
      link: '',
      location: {
        address: '',
        country: '',
        cross_street: '',
        formatted_address: '',
        postcode: '',
        locality: '',
        region: '',
      },
      name: 'Bank of America',
      related_places: {},
      timezone: 'America/New_York',
    },
  ],
  context: {
    geo_bounds: {
      circle: {
        center: {
          latitude: 1.23,
          longitude: 4.56,
        },
        radius: 1.23,
      },
    },
  },
}

export const defaultCurrencyTimelineData: ICurrencyTimeline[] = [
  {
    price_close: 123.45,
    price_high: 234.56,
    price_low: 12.34,
    price_open: 45.67,
    time_close: '2024-01-01T00:00:00Z',
    time_open: '2024-01-01T00:00:00Z',
    time_period_end: '2024-01-01T23:59:59Z',
    time_period_start: '2024-01-01T00:00:00Z',
    trades_count: 123,
    volume_traded: 456.78,
  },
]
