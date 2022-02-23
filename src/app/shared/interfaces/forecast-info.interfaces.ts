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

export interface ForecastI {
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
  condition: Condition;
  wind_degree: number;
  wind_dir: string;
  precip_mm: number;
  precip_in: number;
  vis_km: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
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

export interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  is_day: number;
  condition: Condition3;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  windchill_c: number;
  heatindex_c: number;
  dewpoint_c: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  gust_kph: number;
}

export interface Condition3 {
  text: string;
  icon: string;
  code: number;
}
