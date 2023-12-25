export interface ICity {
  id: number
  city: string
  latitude: number
  longitude: number
}

export interface IGeoCity extends Omit<ICity, 'id' | 'city'> {}

export interface IMapGeo {
  longitude: number
  latitude: number
}
