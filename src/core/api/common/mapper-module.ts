import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';
import { ForecastData } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocation, CurrentLocationWeather } from 'src/app/shared/interfaces/search-info.interfaces';

export function toCurrentWeatherData(weather: CurrentLocationWeather) {
  const year = weather.location.localtime.split('').slice(0, 4).join('');
  const date = getDate(weather);
  const month = new Date().toLocaleString('en', { month: 'long' });
  const temp = Math.floor(weather.current.temp_c);

  return { year, date, month, temp, city : getCity(weather.location) };
}

export function toCityWeatherForecast(forecast: ForecastData) : CityWeatherInfo[] {
  const weatherInfos : CityWeatherInfo[] = forecast.forecast.forecastday.map(day => {
    return {
      minTemp: getTemperature(day.day.mintemp_c).toString(),
      maxTemp: getTemperature(day.day.maxtemp_c).toString(),
      weatherIcon: day.day.condition.icon,
      date: day.date,
      isFavorite : false,
      additionalInfo : {
        windSpeed: day.day.wind_kph?.toString(),
        humidity: day.day.avghumidity.toString(),
        weatherLabel: day.day.condition.text
      }
    }
  });

  return weatherInfos;
}

function getCity (location : CurrentLocation) {
  return `${location.name}, ${location.country}`;
}

function getDate(weather: CurrentLocationWeather) {
  return weather.location.localtime.split('').slice(8, 10).join('');
}
function getTemperature(temp: number) {
  let roundTemp = Math.round(temp)
  return (roundTemp <= 0 ? "" : "+") + roundTemp;
}