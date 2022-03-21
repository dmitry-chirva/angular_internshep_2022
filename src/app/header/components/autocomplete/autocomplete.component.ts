import {Component, Input, OnInit} from '@angular/core';
import {CitySearchInterface} from "../../../shared/interfaces/city-search.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})

export class AutocompleteComponent {

  constructor(private http: HttpClient) {
  }

  keyword = 'name';
  data: any = [
    {
      id: 1,
      name: 'Georgia'
    },
    {
      id: 2,
      name: 'Usa'
    },
    {
      id: 3,
      name: 'England'
    },
    {
      id: 4,
      name: 'London'
    },
  ];


  selectEvent(item: any) {

  }

  onChangeSearch(val: string) {
  }

  onFocused(e: any) {
  }

}
