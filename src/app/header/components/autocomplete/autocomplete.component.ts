import {Component, Input, OnInit} from '@angular/core';
import {CitySearchInterface} from "../../../shared/interfaces/city-search.interface";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})

export class AutocompleteComponent {

  keyword = 'name';
  data = [
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
