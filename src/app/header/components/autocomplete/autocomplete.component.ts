import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CitySearch} from "../../../shared/interfaces/city-search.interface";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})

export class AutocompleteComponent {

  @Input() label: string = ''
  @Input() data: CitySearch[] = [{
    id: 2501828,
    name: "Kiev",
    region: "Kyyivs'ka Oblast'",
    country: "Ukraine",
    lat: 50.43,
    lon: 30.52,
    url: "kiev-kyyivska-oblast-ukraine"
  }]

  @Output() selectedCity = new EventEmitter<CitySearch>()
  @Output() onSearch = new EventEmitter<string>()
  @Output() clearInput = new EventEmitter()

  filter() : CitySearch[] {
    return this.data
  }

  onFocused(e: any) {}
}
