import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  getItem(key: string): string[] {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify([]))
    }
    return JSON.parse(<string>localStorage.getItem(key));
  }

  addItem(key: string, item: string): void {
    const items = this.getItem(key);
    localStorage.setItem(key, JSON.stringify([...items, item]));
  }

  removeItem(key: string, item: string): void {
    const items = this.getItem(key);
    localStorage.setItem(key, JSON.stringify([...items.filter((i) => i !== item)]));
  }

  clear(key: string): void {
    localStorage.setItem(key, JSON.stringify([]));
  }

  constructor() { }
}
