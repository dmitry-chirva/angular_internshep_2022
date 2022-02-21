import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteStateService implements OnInit{

  receiveFavoritesCities(): string[] {
    return JSON.parse(<string>localStorage.getItem('favorite-list'));
  }

  setCity(city: string): string[]  {
    let favoriteList: string[]  = this.receiveFavoritesCities();
    favoriteList.push(city);
    this.setFavoriteCity(favoriteList);
    return favoriteList;
  }

  setFavoriteCity(cities: string[]) {
    localStorage.removeItem('favorite-list');
    localStorage.setItem('favorite-list', JSON.stringify(cities));
  }

  removeCity(city: string): string[] {
    let favoriteList: string[]  = this.receiveFavoritesCities();
    let filterList: string[] = favoriteList.filter(e => e != city)
    this.setFavoriteCity(filterList);
    return filterList;
  }

  ngOnInit() {
    if(!localStorage.getItem('favorite-list')) {
      localStorage.setItem('favorite-list', JSON.stringify([]));
    }
  }
}
