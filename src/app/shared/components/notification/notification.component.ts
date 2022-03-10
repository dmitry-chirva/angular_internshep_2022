import { Component } from '@angular/core';

import { NotificationService } from 'src/core/api/notification/notification.service';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent  {
  notifications: Notification[];

  constructor(private notificationService: NotificationService) {

    this.notifications = this.notificationService.getAll();
    // this.NotificationService.create('5','5');
    // this.NotificationService.create('6','6');
    // this.NotificationService.create('7','7');
  }

  addNew(type:string,message:string){
    this.notificationService.create(type,message);
  }

}
