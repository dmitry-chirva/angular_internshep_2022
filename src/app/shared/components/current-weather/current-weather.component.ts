import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { Component, Input } from '@angular/core';
import { CityWeatherInfo } from '../../interfaces/city-weather-info.interfaces';
import { NotificationService } from 'src/core/api/notification/notification.service';
import { NotificationType } from '../../enums/notification.enum';
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

  constructor(private favoriteStateService: FavoriteStateService, private notificationService: NotificationService){}

  handleFavoriteChange(favoriteCity : CityWeatherInfo){
    this.weatherInfo.isFavorite = favoriteCity.isFavorite;
    (this.weatherInfo.isFavorite)
    ? this.favoriteStateService.addFavoriteCity(this.weatherInfo.city)
    : this.favoriteStateService.removeFavoriteCity(this.weatherInfo.city)

    if(favoriteCity.isFavorite){
      this.notificationService.show(NotificationType.Info,`You added ${favoriteCity.city} to your favorites!`);
    }else{

      this.notificationService.show(NotificationType.Info,`You deleted ${favoriteCity.city} from your list of favorites`);
    }
  }
}
