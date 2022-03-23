export interface ForecastInfo {
  date: string;
  weatherIcon: string;
  minTemp: string;
  maxTemp: string;
  weatherLabel: string;
  wind: string;
  humidity: string;
}

//======

export interface ForecastData {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

export interface Current {
  temp_c: number;
  feelslike_c: number;
  wind_kph: number;
  gust_kph: number;
  humidity: number;
  cloud: number;
  pressure_mb: number;
  is_day: number;
  wind_degree: number;
  wind_dir: string;
  precip_mm: number;
  precip_in: number;
  vis_km: number;
  condition: Condition;
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: CurrentWeather;
  astro: Astro;
  hour: CurrentWeather[];

}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
}

export interface CurrentWeather {
  gust_kps: number;
  temp_c: number;
  condition: Condition;
  wind_kph: number;
  wind_kps?: number;
  pressure_mb: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  gust_kph: number;
  mintemp_c: number;
  maxtemp_c: number;
  avghumidity: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}
