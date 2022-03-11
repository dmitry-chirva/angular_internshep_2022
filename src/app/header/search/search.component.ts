import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search = new FormControl('')
  searchResult: string[] = []
  cityState = ['Oslo', 'New York', 'Manchester', 'London', 'York', 'Stockholm', 'Kiev', 'Poznan', 'Amsterdam']
  notDefined = ''

  searching(event :any) {
    if(this.search.value != 0) {
      this.searchResult = this.cityState.filter((e) => e.slice(0, this.search.value.length).toLowerCase() == this.search.value.toLowerCase() ? e : null)
      if (this.searchResult.length === 0) {
        this.notDefined = 'Not defined'
      } else {
        this.notDefined = ''
      }
    } else {
      this.searchResult = []
      this.notDefined = ''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
