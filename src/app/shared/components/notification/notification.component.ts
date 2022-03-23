import { Component, OnInit } from '@angular/core';
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
        animate('0.1s')
      ])
    ]),
  ],
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  constructor(private notificationService: NotificationService) {}

  ngOnInit(){
    this.notifications = this.notificationService.getAll();
  }

  handleClick(currentNotification: Notification){
    currentNotification.isClicked = true;

    this.notificationService.hide(currentNotification);
    this.notifications = this.notificationService.getAll();
  }
}
