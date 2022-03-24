import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteStateService } from './../../../../core/favorites-state/favorite-state.service';
import { NotificationService } from 'src/core/api/notification/notification.service';
import { CityWeatherInfo } from './../../interfaces/city-weather-info.interfaces';
import { NotificationType } from '../../enums/notification.enum';
@Component({
  selector: 'app-favorite-toggle',
  templateUrl: 'favorite-toggle.component.html',
  styleUrls: [],
})
export class FavoriteToggleComponent {
  @Input()
  favorite!: CityWeatherInfo;
  @Output() onChange = new EventEmitter<CityWeatherInfo>();

  constructor(private notificationService: NotificationService, private favoriteStateService: FavoriteStateService) {
  }

  onToggle() {
    this.favorite.isFavorite = !this.favorite?.isFavorite

    this.onChange.emit(this.favorite);
    if(this.favorite.isFavorite){
      this.notificationService.show(NotificationType.Info,`You added ${this.favorite.city} to your favorites!`);
    }else{

      this.notificationService.show(NotificationType.Info,`You deleted ${this.favorite.city} from your list of favorites`);
    }

  }
}
