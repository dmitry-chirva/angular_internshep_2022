import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NotificationService } from 'src/core/api/notification/notification.service';
import { NotificationType } from '../../enums/notification.enum';

@Component({
  selector: 'app-favorite-toggle',
  templateUrl: 'favorite-toggle.component.html',
  styleUrls: [],
})
export class FavoriteToggleComponent {
  constructor(private notificationService: NotificationService) {}
  @Input() isFavorite: boolean | undefined;
  @Output() onChange = new EventEmitter<boolean | undefined>();

  onToggle() {
    this.isFavorite = !this.isFavorite;
    this.onChange.emit(this.isFavorite);

    this.notificationService.show(NotificationType.Info,'You clicked on heart icon');
  }
}
