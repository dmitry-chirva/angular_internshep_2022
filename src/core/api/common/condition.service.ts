import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConditionService {
  getBackgroundImagePath(condition: string) {
    switch (condition) {
      case 'Sunny':
      case 'Clear':
      case 'Partly cloudy':
        return '../assets/images/sunny.jpg';
      case 'Cloudy':
      case 'Overcast':
      case 'Mist':
      case 'Fog':
      case 'Freezing fog':
        return '../assets/images/mist.jpg';
      case 'Patchy rain possible':
      case 'Thundery outbreaks possible':
      case 'Patchy light drizzle':
      case 'Light drizzle':
      case 'Heavy freezing drizzle':
      case 'Patchy light rain':
      case 'Light rain':
      case 'Moderate rain at times':
      case 'Moderate rain':
      case 'Heavy rain at times':
      case 'Heavy rain':
      case 'Light freezing rain':
      case 'Moderate or heavy freezing rain':
      case 'Light rain shower':
      case 'Moderate or heavy rain shower':
      case 'Torrential rain shower':
      case 'Light sleet showers':
      case 'Patchy light rain with thunder':
      case 'Moderate or heavy rain with thunder':
        return '../assets/images/rain.jpg';
      case 'Patchy snow possible':
      case 'Patchy sleet possible':
      case 'Patchy freezing drizzle possible':
      case 'Blowing snow':
      case 'Freezing drizzle':
      case 'Light sleet':
      case 'Moderate or heavy sleet':
      case 'Light snow':
      case 'Patchy light snow':
      case 'Patchy moderate snow':
      case 'Moderate snow':
      case 'Patchy heavy snow':
      case 'Heavy snow':
      case 'Ice pellets':
      case 'Moderate or heavy sleet showers':
      case 'Light snow showers':
      case 'Moderate or heavy snow showers':
      case 'Light showers of ice pellets':
      case 'Moderate or heavy showers of ice pellets':
      case 'Patchy light snow with thunder':
      case 'Moderate or heavy snow with thunder':
        return '../assets/images/snow1.jpg';
      default:
        return '../assets/images/default-bkg.jpg';
    }
  }
}
