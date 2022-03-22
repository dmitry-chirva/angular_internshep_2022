import {Component} from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})

export class AutocompleteComponent {

  constructor() {
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
