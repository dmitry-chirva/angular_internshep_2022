import {Injectable, OnInit} from '@angular/core';
import {StorageService} from "../storage/storage.service";

@Injectable({
  providedIn: 'root',
})
export class FavoriteStateService {

  readonly FAVORITES_KEY = 'favorites-cities'

  constructor(private storage: StorageService) {}

  getFavoritesCity(): string[] {
    return this.storage.getItem(this.FAVORITES_KEY);
  }

  addFavoriteCity(city: string): void {
    this.storage.addItem(this.FAVORITES_KEY, city);
  }

  removeFavoriteCity(city: string): void {
    this.storage.removeItem(this.FAVORITES_KEY, city);
  }

  isFavoriteCity(city: string): boolean {
    return this.storage.getItem(this.FAVORITES_KEY).indexOf(city) === -1;
  }
}
