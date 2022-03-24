import { CityWeatherAdditionalInfo } from './city-weather-additional-info.interfaces';

export interface CityWeatherInfo {
  city: string;
  date: string;
  temp?: string;
  minTemp? : string;
  maxTemp? : string;
  weatherIcon?: string;
  isFavorite?: boolean;
  additionalInfo?: CityWeatherAdditionalInfo;
}
