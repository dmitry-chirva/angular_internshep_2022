import { ICityWeatherAdditionalInfo } from './city-weather-additional-info.interfaces';

export interface ICityWeatherInfo {
  city: string;
  date: string;
  temp: string;
  weatherIcon?: string;
  isFavorite?: boolean;
  additionalInfo?: ICityWeatherAdditionalInfo;
}
