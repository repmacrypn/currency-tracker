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

export const defaultCurrencyData = {
  symbol: 'AR$',
  name: 'Argentine Peso',
  symbol_native: '$',
  decimal_digits: 2,
  rounding: 0,
  code: 'ARS',
  name_plural: 'Argentine pesos',
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

export const allBanks: IBanksData = {
  results: [
    {
      fsq_id: '4fabcbe8e4b07dbb597c554b',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 4009,
      geocodes: {
        main: {
          latitude: 53.924063,
          longitude: 27.612311,
        },
      },
      link: '/v3/places/4fabcbe8e4b07dbb597c554b',
      location: {
        address: 'пр-т Независимости, 93',
        country: 'BY',
        formatted_address: 'пр-т Независимости, 93, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Альфа-Банк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '55fbc49e498e3e59b507d245',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 3758,
      geocodes: {
        main: {
          latitude: 53.885478,
          longitude: 27.514835,
        },
      },
      link: '/v3/places/55fbc49e498e3e59b507d245',
      location: {
        address: 'Ул. Щорса, 11',
        country: 'BY',
        cross_street: '',
        formatted_address: 'Ул. Щорса, 11, Мінск',
        locality: 'Minsk',
        region: 'Minsk',
      },
      name: 'Абсолютбанк',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4fd70b1ce4b03d9254274aaa',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 4003,
      geocodes: {
        main: {
          latitude: 53.908301,
          longitude: 27.62617,
        },
      },
      link: '/v3/places/4fd70b1ce4b03d9254274aaa',
      location: {
        address: '2-й пер. Багратиона, 20',
        country: 'BY',
        cross_street: '',
        formatted_address: '2-й пер. Багратиона, 20, Мінск, 220037',
        locality: 'Minsk',
        postcode: '220037',
        region: 'Minsk',
      },
      name: 'Беларусбанк 511/212',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
    {
      fsq_id: '4cda97d6930af04deca98597',
      categories: [
        {
          id: 11045,
          name: 'Bank',
          icon: {
            prefix: 'https://ss3.4sqi.net/img/categories_v2/shops/financial_',
            suffix: '.png',
          },
        },
      ],
      chains: [],
      distance: 2092,
      geocodes: {
        main: {
          latitude: 53.910743,
          longitude: 27.540416,
        },
      },
      link: '/v3/places/4cda97d6930af04deca98597',
      location: {
        address: 'просп. Победителей, 23 корп. 3',
        country: 'BY',
        cross_street: 'ул. Заславская',
        formatted_address:
          'просп. Победителей, 23 корп. 3 (ул. Заславская), Мінск, 220004',
        locality: 'Minsk',
        postcode: '220004',
        region: 'Minsk',
      },
      name: 'BSB Bank',
      related_places: {},
      timezone: 'Europe/Minsk',
    },
  ],
  context: {
    geo_bounds: {
      circle: {
        center: {
          latitude: 53.9,
          longitude: 27.56667,
        },
        radius: 7128,
      },
    },
  },
}

export const defaultChartData = [
  {
    price_close: 30592,
    price_high: 30647,
    price_low: 30321,
    price_open: 30469,
    time_close: '2023-07-01T23:58:46.1090000Z',
    time_open: '2023-07-01T00:00:12.7540000Z',
    time_period_end: '2023-07-02T00:00:00.0000000Z',
    time_period_start: '2023-07-01T00:00:00.0000000Z',
    trades_count: 8788,
    volume_traded: 603.9032895,
  },
]

export const defaultGeo = {
  latitude: 52.0975,
  longitude: 23.6877,
}
