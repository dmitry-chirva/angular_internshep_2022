import { Injectable, OnInit } from '@angular/core';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
import { StringUtils } from 'src/app/shared/utils/string.utils';
import { NotificationType } from 'src/app/shared/enums/notification.enum';
@Injectable({
  providedIn: 'root'
})
export class NotificationService{
  notifications : Notification[] =  [];

  constructor(){
  }

  show( type: NotificationType, message: string ): void {
    const id = StringUtils.generateUID();
    this.notifications.push({id, type, message});
  }

  hide(currentNotification : Notification){
    this.notifications = this.notifications.filter( notification => notification.id != currentNotification.id);
  }

  getAll(): Notification[] {
    return this.notifications;
  }
}
