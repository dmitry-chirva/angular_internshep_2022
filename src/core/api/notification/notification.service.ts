
import { Injectable } from '@angular/core';
import { Notification } from 'src/app/shared/interfaces/notification.interface';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {}

  // TYPES = ['success','error','warning','general'];

  notifications : Notification[] =  [
    { type: '1', message: 'the max limit of favorite cities is 10'+'1'},
    { type: '2', message: 'the max limit of favorite cities is 10'+'1'},
    { type: '3', message: 'the max limit of favorite cities is 10'+'1'}
  ];

  // getTest():any{
  //   return this.notifications;
  // }


  create( type: string, message:string ){
    this.notifications.push( { type: type, message: message});
  }

  // deleteAll():Array<Notification>{
  //   this.notifications = [];
  //   return this.notifications;
  // }


  getAll():Array<Notification>{
    return this.notifications;
  }



}

// export interface Notification {
//   type: string,
//   message: string
// }
