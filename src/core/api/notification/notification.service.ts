import { Injectable, OnInit } from '@angular/core';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Injectable({
  providedIn: 'root'
})
export class NotificationService{
  notifications : Notification[] =  [];

  constructor(){
  }

  show( type: string, message:string ): void {
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
