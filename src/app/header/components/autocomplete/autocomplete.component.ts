import {Component, Input, Output} from '@angular/core';
import {FavoriteStateService} from "../../../../core/favorites-state/favorite-state.service";
import {CitySearch} from "../../../shared/interfaces/city-search.interface";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})

export class AutocompleteComponent {

  constructor(private state: FavoriteStateService) {}

  @Input() currentCity: string = ''

  @Output() selectedCity: CitySearch = {
    id: 2501828,
    name: "Kiev",
    region: "Kyyivs'ka Oblast'",
    country: "Ukraine",
    lat: 50.43,
    lon: 30.52,
    url: "kiev-kyyivska-oblast-ukraine"
  }

  keyword = 'name';
  data: CitySearch[] = [
    {
      id: 2501828,
      name: "Kiev",
      region: "Kyyivs'ka Oblast'",
      country: "Ukraine",
      lat: 50.43,
      lon: 30.52,
      url: "kiev-kyyivska-oblast-ukraine"
    },
  ];


  selectEvent(item: CitySearch) {
    this.selectedCity = item;
  }

  onChangeSearch(val: string) {
  }

  onFocused(e: any) {
  }

}
