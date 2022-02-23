import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-toggle',
  templateUrl: 'favorite-toggle.component.html',
  styleUrls: [],
})
export class FavoriteToggleComponent {
  constructor() {}
  @Input() isFavorite: boolean | undefined;
  @Output() onChange = new EventEmitter<boolean | undefined>();

  onToggle() {
    this.isFavorite = !this.isFavorite;
    this.onChange.emit(this.isFavorite);
  }
}