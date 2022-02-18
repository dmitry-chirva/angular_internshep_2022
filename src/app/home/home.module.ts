import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    FavoriteListComponent,
    FavoriteItemComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    HomeComponent,
    FavoriteListComponent,
    FavoriteItemComponent,
  ],
})
export class HomeModule {
}
