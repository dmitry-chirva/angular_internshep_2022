import { Component, Input } from '@angular/core';
import { ICityWeatherInfo } from '../../interfaces/city-weather-info.interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {
  @Input() weatherInfo: ICityWeatherInfo | null = null;
  @Input() hasFavorite: boolean = true;
  @Input() hasTemperature: boolean = true;
  @Input() hasInfo: boolean = true;

  handleFavoriteChange(isFavorite: boolean | undefined) {
    if (this.weatherInfo) {
      this.weatherInfo.isFavorite = isFavorite;
    }
  }
}
