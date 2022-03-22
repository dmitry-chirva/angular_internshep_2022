import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-groups',
  templateUrl: './btn-groups.component.html',
  styleUrls: ['./btn-groups.component.scss']
})
export class BtnGroupsComponent {
  @Input() currentCity : string | undefined = undefined;
}
