import { Injectable, OnInit } from '@angular/core';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
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
    this.notifications.push(  {type: type, message: message} );
  }
  getAll(): Notification[] {
    return this.notifications;
  }
}
