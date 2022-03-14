import {Component, Input, OnInit} from '@angular/core';
import {CitySearchInterface} from "../../shared/interfaces/city-search.interface";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})

export class AutocompleteComponent implements OnInit {

  @Input() cities: CitySearchInterface[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
