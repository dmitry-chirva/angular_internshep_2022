import { Component } from '@angular/core';
import { NotificationService } from 'src/core/api/notification/notification.service';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('shownHidden', [
      state('shown', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0,
      })),
      transition('shown => hidden', [
        animate('0.3s')
      ])
    ]),
  ],
})
export class NotificationComponent  {
  notifications: Notification[];
  constructor(private notificationService: NotificationService) {
    this.notifications = this.notificationService.getAll();
  }

  handleClick(itemToDel: Notification){
    itemToDel.isClicked = true;
    setTimeout(() => {
      this.notifications = this.notifications.filter(notification => JSON.stringify(notification) != JSON.stringify(itemToDel));
    }, 400);
  }
}
