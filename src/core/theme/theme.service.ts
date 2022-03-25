import { Injectable } from '@angular/core';
import { StorageService } from "../storage/storage.service";
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeTypes } from '../../app/shared/enums/theme-types.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme$ = new BehaviorSubject(ThemeTypes.LIGHT)

  readonly THEME_STORAGE_KEY = 'theme-type';
  constructor(private storage: StorageService) {
    let theme = ThemeTypes.LIGHT;

    if(this.storage.getItem(this.THEME_STORAGE_KEY).length) {
      theme = <ThemeTypes>this.storage.getItem(this.THEME_STORAGE_KEY)[0];
    }

    this.setTheme(theme);
  }

  getTheme$(): Observable<ThemeTypes> {
    return this.theme$.asObservable();
  }

  getTheme(): ThemeTypes {
    return this.theme$.getValue();
  }

  setTheme(theme: ThemeTypes): void {
    this.theme$.next(theme);
    this.storage.clear(this.THEME_STORAGE_KEY);
    this.storage.addItem(this.THEME_STORAGE_KEY, theme);
  }

  resetTheme(): void {
    this.theme$.next(ThemeTypes.LIGHT);
    this.storage.clear(this.THEME_STORAGE_KEY);
    this.storage.addItem(this.THEME_STORAGE_KEY, ThemeTypes.LIGHT);
  }
}
