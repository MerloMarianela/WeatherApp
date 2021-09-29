export interface GetData {
  data: Data;
}

export interface Data {
  getCityById: GetCityByID;
}

export interface GetCityByID {
  id:      string;
  name:    string;
  country: string;
  coord:   Coord;
  weather: Weather;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  summary:     Summary;
  temperature: Temperature;
  wind:        Wind;
  clouds:      Clouds;
  timestamp:   number;
}

export interface Clouds {
  all:        number;
  visibility: number;
  humidity:   number;
}

export interface Summary {
  title:       string;
  description: string;
  icon:        string;
}

export interface Temperature {
  actual:    number;
  feelsLike: number;
  min:       number;
  max:       number;
}

export interface Wind {
  speed: number;
  deg:   number;
}

export interface ContextState {
  name: string;
}

export interface TypeSearch {
selectedCity: GetCityByID | undefined
selectCity:   (selected: string | number) => void
cities:       [] 
setAllCities: (cities: []) => void
}
