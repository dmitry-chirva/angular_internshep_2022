import { Injectable } from '@angular/core';
import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';
import { ForecastData } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocation, CurrentLocationWeather } from 'src/app/shared/interfaces/search-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherTransformService {

  toCurrentWeatherData(weather: CurrentLocationWeather) {
    const year = weather.location.localtime.split('').slice(0, 4).join('');
    const date = this.getDate(weather);
    const month = new Date().toLocaleString('en', { month: 'long' });
    const temp = Math.floor(weather.current.temp_c);

    return { year, date, month, temp, city: this.getCity(weather.location) };
  }

  toCityWeatherForecast(forecast: ForecastData): CityWeatherInfo[] {
    const weatherInfos: CityWeatherInfo[] = forecast.forecast.forecastday.map(
      (day) => {
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
        };
      }
    );

    return weatherInfos;
  }

  private getCity(location: CurrentLocation) {
    return `${location.name}, ${location.country}`;
  }

  private getDate(weather: CurrentLocationWeather) {
    return weather.location.localtime.split('').slice(8, 10).join('');
  }

  private getTemperature(temp: number) {
    let roundTemp = Math.round(temp);
    return (roundTemp <= 0 ? '' : '+') + roundTemp;
  }
}
