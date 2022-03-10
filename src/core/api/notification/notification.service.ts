
import { Injectable, OnInit } from '@angular/core';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications : Notification[] =  [
    { type: '1', message: 'This is simple test notification'},
    // { type: '2', message: 'the max limit of favorite cities is 10'+'1'},
    // { type: '3', message: 't2342424'},
    // { type: '3', message: 'the max limit of favorite cities is 10'+'1'}
  ];
  currNotification: Notification | undefined;
  constructor() {

  }


  create( type: string, message:string ){
    this.currNotification = { type: type, message: message}
    this.notifications.push( this.currNotification);
  }

  getAll():Array<Notification>{
    return this.notifications;
  }

  OnInit(currNotification: Notification){

    setTimeout(() => {
      this.notifications.filter( notification =>  notification!= currNotification)
    }, 4000);
  }


}

  // TYPES = ['success','error','warning','general'];
