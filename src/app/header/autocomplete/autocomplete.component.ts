import {Component, Input, OnInit} from '@angular/core';


interface obj {
  name: string
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})

export class AutocompleteComponent implements OnInit {



  @Input() data: obj[] = [{name: 'kei'}]

  constructor() { }

  ngOnInit(): void {
  }

}
