import { Injectable, OnInit } from '@angular/core';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications : Notification[] =  [];
  counter: number = 0;
  constructor() {
    this.defaultGreeting();
  }
  defaultGreeting():void {
    this.show('Info', 'Hello, I am new notification service!');
    this.show('Info', 'Have a nice day =)');
  };

  show(type: string, message: string):void {
    let newNotification: Notification = {
      id: this.counter,
      type: type,
      message: message,
      isClicked: false
    };

    this.notifications.push(newNotification);
    this.counter += 1;
  }
  getAll(): Notification[] {
    return this.notifications;
  }
}
