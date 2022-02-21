import {Component, OnInit} from '@angular/core';
import { CityWeatherInfo } from '../../../shared/interfaces/city-weather-info.interfaces';
import {FavoriteStateService} from "../../../../core/favorites-state/favorite-state.service";

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
  providers: [FavoriteStateService]
})
export class FavoriteListComponent implements OnInit {
  favoritesList: string[] = []
  favorites: CityWeatherInfo[] = [
    {
      city: 'Toronto',
      date: 'February 18th, 2022',
      temp: '1 °С',
      isFavorite: true,
      weatherIcon: '',
      additionalInfo: {
        weatherLabel: "Light snow",
        windSpeed: "3 km/h",
        humidity: "72%"
      }
    },
    {
      city: 'Stockholm',
      date: 'February 18th, 2022',
      temp: '-3 °С',
      isFavorite: true,
      weatherIcon: '',
      additionalInfo: {
        weatherLabel: "Light snow",
        windSpeed: "5 km/h",
        humidity: "85%"
      }
    },
    {
      city: 'Oslo',
      date: 'February 7th, 2022',
      temp: '-5 °С',
      isFavorite: true,
      weatherIcon: '',
      additionalInfo: {
        weatherLabel: "Light snow",
        windSpeed: "10 km/h",
        humidity: "90%"
      }
    }
  ]

  ngOnInit() {
    this.favoritesList = this.favoritesData.receiveFavoritesCities();
  }

  constructor(public favoritesData: FavoriteStateService) {
    this.favoritesData.setCity('Oslo');
  }
}
