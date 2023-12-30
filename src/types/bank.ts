export interface IBanksData {
  results: IBank[]
  context: {
    geo_bounds: {
      circle: {
        center: {
          latitude: number
          longitude: number
        }
        radius: number
      }
    }
  }
}

export interface IBank {
  fsq_id: string
  categories: IBankCategories[]
  chains: []
  distance: number
  geocodes: {
    main: {
      latitude: number
      longitude: number
    }
  }
  link: string
  location: {
    address?: string
    country?: string
    cross_street?: string
    formatted_address?: string
    postcode?: string
    locality?: string
    region?: string
  }
  name: string
  related_places: {}
  timezone: string
}

interface IBankCategories {
  id: number
  name: string
  icon: {
    prefix: string
    suffix: string
  }
}

export enum Bank {
  Belinvest = 'белинвест',
  Absolut = 'абсолют',
  Tehno = 'техно',
  Bnb = 'бнб',
  Veb = 'вэб',
  Bsb = 'bsb',
  Prior = 'приор',
  Alfa = 'альфа',
  Mtb = 'мтб',
  Dabrabyt = 'дабрабыт',
  Sber = 'сбер',
}
