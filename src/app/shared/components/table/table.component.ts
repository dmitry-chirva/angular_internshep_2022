import { Component, Input } from '@angular/core';
import { Column } from '../../interfaces/table.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() columns: Column[] = [];
  @Input() data: any = [];
}
