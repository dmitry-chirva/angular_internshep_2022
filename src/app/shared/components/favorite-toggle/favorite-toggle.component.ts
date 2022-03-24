import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CityWeatherInfo } from './../../interfaces/city-weather-info.interfaces';
@Component({
  selector: 'app-favorite-toggle',
  templateUrl: 'favorite-toggle.component.html',
  styleUrls: [],
})
export class FavoriteToggleComponent {
  @Input()
  favorite!: CityWeatherInfo;
  @Output() onChange = new EventEmitter<CityWeatherInfo>();

  constructor() {}

  onToggle() {
    this.favorite.isFavorite = !this.favorite?.isFavorite
    this.onChange.emit(this.favorite);
  }
}
