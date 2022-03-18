import { Injectable, OnInit } from '@angular/core';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
import { StringsUtils } from 'src/app/shared/utils/strings.utils';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications : Notification[] =  [];

  constructor() {}

  show( type: string, message:string ):void {
    const id = StringsUtils.generateUID();
    this.notifications.push({id, type, message});
  }

  getAll(): Notification[] {
    return this.notifications;
  }
}
