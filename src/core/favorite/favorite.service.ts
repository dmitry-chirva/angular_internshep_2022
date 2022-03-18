import { WeatherService } from 'src/core/api/weather/weather.service';
import { Injectable } from '@angular/core';
import { CityWeatherInfo } from './../../app/shared/interfaces/city-weather-info.interfaces';
import { NotificationService } from 'src/core/api/notification/notification.service';
import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { map, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  maxAmountOfFavs: number = 10;
  defaultFavorites: CityWeatherInfo[] = [
    {
      city: 'Toronto',
      date: 'February 18th, 2022',
      temp: '1 °С',
      isFavorite: true,
      weatherIcon: 'assets/images/weather.png',
      additionalInfo: {
        weatherLabel: 'Light snow',
        windSpeed: '3 km/h',
        humidity: '72%',
      },
    },
    {
      city: 'Stockholm',
      date: 'February 18th, 2022',
      temp: '-3 °С',
      isFavorite: true,
      weatherIcon: 'assets/images/weather.png',
      additionalInfo: {
        weatherLabel: 'Light snow',
        windSpeed: '5 km/h',
        humidity: '85%',
      },
    },
    {
      city: 'Oslo',
      date: 'February 7th, 2022',
      temp: '-5 °С',
      isFavorite: true,
      weatherIcon: 'assets/images/weather.png',
      additionalInfo: {
        weatherLabel: 'Light snow',
        windSpeed: '10 km/h',
        humidity: '90%',
      },
    }
  ];
  favoritesCitiesNames: string[] = ['Toronto','Oslo','Odessa']; //names
  favorites : CityWeatherInfo[] = this.defaultFavorites;
  favsfavoriteCity: CityWeatherInfo[] = [];
  newFavCitiesCanBeAdded: boolean = (this.favorites.length < this.maxAmountOfFavs) ? true : false;

  constructor(public favoriteStateService: FavoriteStateService, private weatherService: WeatherService,  private notificationService :NotificationService) {
    this.favListGreeting();
    this.boo();
    // this.favoritesCitiesNames = this.favoriteStateService.getFavoriteCities();
  }

  boo(){
    let result = this.weatherService
      .getForecastWeather('Toronto')
      .pipe(
        map(({location,current}) => {
          let month = new Date().toLocaleString('en', {
            month: 'long',
          });
          let dateNumber = location.localtime
          .split('')
          .slice(8, 10)
          .join('');
          switch(dateNumber){
            case '1':
              dateNumber = '1st'
              break;
            case '2':
              dateNumber = '2nd'
              break;
            case '3':
              dateNumber = '3rd'
              break;
            default:
              dateNumber += 'th'
              break;
          }
          return {
            city: location.name,
            date: `${month} ${dateNumber}, ${location.localtime
              .split('')
              .slice(0, 4)
              .join('')}`
            ,
            temp: `${Math.floor(current.temp_c)} °C`,
            weatherIcon: current.condition.icon,
            isFavorite: false,
            additionalInfo: {
              weatherLabel: current.condition.text,
              windSpeed: `${Math.ceil(current.wind_kph)} km/h`,
              humidity: `${current.humidity}%`,
            }
          }
        })


      )
      .subscribe(({ city }: any) => {
        console.log('city',city);
        // this.weatherInfo.city = city;
      });
      console.log('result',result)

  }
  getFavorites(): CityWeatherInfo[] {


      return [];
  }


  favListGreeting():void {
    if(this.newFavCitiesCanBeAdded){
      this.notificationService.show('Advise', `There are ${this.favorites.length} cities in your favorite list!`);
    }
    else{
      this.notificationService.show('Warning', `There is max amount of cities in your list of favorites!`)
    }
    setTimeout(() => {
      this.notificationService.show('Advice', `Listen to learn. Learn how to listen. You can't learn anything when you're talking.`)

    }, 3000);

  };

  checkAmountOfFavorites():boolean {
    return this.newFavCitiesCanBeAdded;
  }

}
