import {Injectable} from '@angular/core';
import {StorageService} from "../storage/storage.service";
@Injectable({
  providedIn: 'root',
})
export class FavoriteStateService {

  readonly FAVORITES_KEY = 'favorites-cities';
  readonly MAX_AMOUNT_OF_FAVS = 10;
  constructor(private storage: StorageService) {}

  getFavoriteCities(): string[] {
    return this.storage.getItem(this.FAVORITES_KEY);
  }

  addFavoriteCity(city: string): void {
    if(this.isFavoriteCity(city) && this.hasMaxCities()) {
      this.storage.addItem(this.FAVORITES_KEY, city);
    }
  }

  removeFavoriteCity(city: string): void {
    this.storage.removeItem(this.FAVORITES_KEY, city);
  }

  isFavoriteCity(city: string): boolean {
    return this.storage.getItem(this.FAVORITES_KEY).indexOf(city) === -1;
  }

  hasMaxCities(): boolean{
    return this.storage.getItem(this.FAVORITES_KEY).length < this.MAX_AMOUNT_OF_FAVS;
  }
}
