import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';
import { WeatherService } from 'src/core/api/weather/weather.service';
import { Injectable } from '@angular/core';
import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { pipe, map, of, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  maxAmountOfFavs: number = 10;
  favorites: CityWeatherInfo[] = [];
  testFavorites: CityWeatherInfo[] = [
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

  constructor(public favoriteStateService: FavoriteStateService, private weatherService: WeatherService) {
    this.favorites = this.testFavorites;
    // this.getFavorites().subscribe((v)=>{console.log(v)});

    this.getFavorite().subscribe(value=> {
      console.log(value);
    });
  }



  getFavorite(): Observable<CityWeatherInfo>{

    return this.weatherService.getForecastWeather('Toronto').pipe(
      map(({location, current}) => {
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
          let newCity: CityWeatherInfo = {
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
          return newCity
      })
    )

  }

  checkAmountOfFavorites():boolean{
    return this.favorites.length < this.maxAmountOfFavs;
  }
}



