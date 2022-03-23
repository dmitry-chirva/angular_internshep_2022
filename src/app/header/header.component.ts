import {Component, Output} from '@angular/core';
import {CitySearch} from "../shared/interfaces/city-search.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Output() selectedCity: CitySearch = {
    id: 2501828,
    name: "Kiev",
    region: "Kyyivs'ka Oblast'",
    country: "Ukraine",
    lat: 50.43,
    lon: 30.52,
    url: "kiev-kyyivska-oblast-ukraine"
  }

  values: CitySearch[] = [
    {
      id: 2501828,
      name: "Kiev",
      region: "Kyyivs'ka Oblast'",
      country: "Ukraine",
      lat: 50.43,
      lon: 30.52,
      url: "kiev-kyyivska-oblast-ukraine"
    },
    {
      id: 2501828,
      name: "New york",
      region: "Kyyivs'ka Oblast'",
      country: "Ukraine",
      lat: 50.43,
      lon: 30.52,
      url: "kiev-kyyivska-oblast-ukraine"
    }
  ]
  searchLabel = 'name';

  onSearch(value: string):void {}

  selectCity(city: CitySearch):void {
    this.selectedCity = city
  }
}
