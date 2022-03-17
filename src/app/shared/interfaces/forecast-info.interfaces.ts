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
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Day[];
}

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  avgvis_km: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition2;
}

export interface Condition2 {
  text: string;
  icon: string;
  code: number;
}

export interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
}

export interface Day {
  gust_kps: number;
  temp_c: number;
  condition: Condition3;
  wind_kph: number;
  wind_kps?: number;
  pressure_mb: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  gust_kph: number;
}

export interface Condition3 {
  text: string;
  icon: string;
  code: number;
}
