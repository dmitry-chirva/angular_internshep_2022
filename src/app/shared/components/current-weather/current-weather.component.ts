import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { Component, Input } from '@angular/core';
import { CityWeatherInfo } from '../../interfaces/city-weather-info.interfaces';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {
  @Input()
  weatherInfo!: CityWeatherInfo;
  @Input() hasFavorite: boolean = true;
  @Input() hasTemperature: boolean = true;
  @Input() hasInfo: boolean = true;

  constructor(private favoriteStateService: FavoriteStateService){}

  handleFavoriteChange(favoriteCity : CityWeatherInfo){
    this.weatherInfo.isFavorite = favoriteCity.isFavorite;
    (this.weatherInfo.isFavorite)
    ? this.favoriteStateService.addFavoriteCity(this.weatherInfo.city)
    : this.favoriteStateService.removeFavoriteCity(this.weatherInfo.city)
  }
}
