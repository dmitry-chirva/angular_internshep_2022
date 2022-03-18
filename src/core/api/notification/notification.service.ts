import { Injectable } from '@angular/core';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
import { StringUtils } from 'src/app/shared/utils/string.utils';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications : Notification[] =  [];

  constructor(){
  }

  show( type: string, message:string ): void {
    const id = StringUtils.generateUID();
    this.notifications.push({id, type, message});
  }

  getAll(): Notification[] {
    return this.notifications;
  }
}
