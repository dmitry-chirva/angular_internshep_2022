import { ForecastData } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocationWeather } from 'src/app/shared/interfaces/search-info.interfaces';

export function toCurrentWeatherData(weather: CurrentLocationWeather) {
  const year = weather.location.localtime.split('').slice(0, 4).join('');
  const date = weather.location.localtime.split('').slice(8, 10).join('');
  const month = new Date().toLocaleString('en', { month: 'long' });
  const temp = Math.floor(weather.current.temp_c);
  const city = `${weather.location.name}, ${weather.location.country}`;

  return { year, date, month, temp, city };
}

export function fromForecasttoCurrentWeatherData(weather: ForecastData) {
  const year = weather.location.localtime.split('').slice(0, 4).join('');
  const date = weather.location.localtime.split('').slice(8, 10).join('');
  const month = new Date().toLocaleString('en', { month: 'long', });
  const temp = Math.floor(weather.current.temp_c);
  const city = `${weather.location.name}, ${weather.location.country}`;

  return { year, date, month, temp, city };
}
