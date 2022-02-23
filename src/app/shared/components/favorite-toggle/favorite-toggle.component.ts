import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-favorite-toggle',
  template: ` <i [class]="currClass" (click)="changeCondition()"></i>`,
  styleUrls: [
    '../../../home/components/favorite-item/favorite-item.component.scss',
  ],
})
export class FavoriteToggleComponent implements OnInit {
  constructor() {}
  @Input() condition: boolean | undefined; // info?.isFavorite

  ngOnInit(): void {
    console.log('onInit', this.condition);

    if (!this.condition) {
      this.currClass = ` icon-heart favorite__header__icon-heart-active `;
    } else {
      this.currClass = ` icon-heart-active  favorite__header__icon-heart-active`;
    }
  }
  currClass: string = '';

  changeCondition(): void {
    // if (!this.condition) {
    //   this.currClass = ` icon-heart-active  favorite__header__icon-heart-active`;
    // } else {
    //   this.currClass = ` icon-heart favorite__header__icon-heart-active `;
    // }

    this.currClass = ` icon-heart${
      !this.condition ? '-active' : ''
    } favorite__header__icon-heart-active`;

    this.condition = !this.condition;
    console.log(this.condition);
  }
}

// <i class="icon-heart-active favorite__header__icon-heart-active"></i>
