import {Component, EventEmitter, Output} from '@angular/core';
import {CitySearch} from "../shared/interfaces/city-search.interface";
import {SearchService} from "../../core/api/search/search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {

  constructor(private search: SearchService, private router: Router) {}

  @Output() selectedCity = {
    id: 2501828,
    name: "Kiev",
    region: "Kyyivs'ka Oblast'",
    country: "Ukraine",
    lat: 50.43,
    lon: 30.52,
    url: "kiev-kyyivska-oblast-ukraine"
  }

  values: CitySearch[] = []
  searchLabel = 'name';

  onSearch(value: string):void {
    if(value) {
      this.search.getSearchList(value).subscribe((data) => {
        this.values = data;
      })
    }
  }

  selectCity(city: CitySearch):void {
    this.selectedCity = city
    this.router.navigate([`/${this.selectedCity.name}/details`])
  }

  clearResult():void {
      this.values = []
  }
}

