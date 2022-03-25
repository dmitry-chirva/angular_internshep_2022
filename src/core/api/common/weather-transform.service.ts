import { Injectable } from '@angular/core';
import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';
import { ForecastData } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocationWeather } from 'src/app/shared/interfaces/search-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherTransformService {
  toCurrentWeatherData({ location, current }: CurrentLocationWeather) {
    return {
      year: location.localtime.split('').slice(0, 4).join(''),
      date: location.localtime.split('').slice(8, 10).join(''),
      month: new Date().toLocaleString('en', { month: 'long' }),
      temp: Math.floor(current.temp_c),
      condition: current.condition.text,
      city: location.name,
    };
  }

  toCityWeatherForecast(...forecasts: ForecastData[]): CityWeatherInfo[] {
    const weatherInfos: CityWeatherInfo[] = forecasts.flatMap(({ forecast }) =>
      forecast.forecastday.map((day) => {
        return {
          minTemp: this.getTemperature(day.day.mintemp_c).toString(),
          maxTemp: this.getTemperature(day.day.maxtemp_c).toString(),
          weatherIcon: day.day.condition.icon,
          date: day.date,
          isFavorite: false,
          additionalInfo: {
            windSpeed: day.day.wind_kph?.toString(),
            humidity: day.day.avghumidity.toString(),
            weatherLabel: day.day.condition.text,
          },
          city: '',
        };
      })
    );

    return weatherInfos;
  }

  toCityWeatherFavorite({
    location,
    current,
    forecast,
  }: ForecastData): CityWeatherInfo {
    let favoritesInfo: CityWeatherInfo = {
      city: location.name,
      date: forecast.forecastday[0].date,
      temp: `${Math.floor(current.temp_c)} °C`,
      weatherIcon: current.condition.icon,
      isFavorite: true,
      additionalInfo: {
        weatherLabel: current.condition.text,
        windSpeed: `${Math.ceil(current.wind_kph)}`,
        humidity: `${current.humidity}`,
      },
    };
    return favoritesInfo;
  }

  private getTemperature(temp: number) {
    let roundTemp = Math.round(temp);
    return (roundTemp <= 0 ? '' : '+') + roundTemp;
  }
}
