import { Injectable, OnInit } from '@angular/core';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
import { StringsUtils } from 'src/app/shared/utils/strings.utils';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications : Notification[] =  [];

  constructor() {
    this.defaultGreeting();
  }
  defaultGreeting():void {
    this.show('Info', 'Hello, I am new notification service!');
    this.show('Info', 'Have a nice day =)');
  };

  show( type: string, message:string ):void {
    const id = StringsUtils.generateUID();
    this.notifications.push(  { id, type, message} );
  }

  getAll(): Notification[] {
    return this.notifications;
  }
}
