import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CitySearchInterface} from "../shared/interfaces/city-search.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  search = new FormControl('');

  citiesList: CitySearchInterface[] = []

  constructor(private http: HttpClient) { }

  getCities (): any {
    this.http.get<[]>(
      `http://api.weatherapi.com/v1/search.json?key=b88614b3fb684e8b996104153220302&q=${this.search.value}`
    ).subscribe((data) => this.citiesList = data)
  }
}
