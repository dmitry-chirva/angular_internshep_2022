import { NotificationType } from './../enums/notification.enum';
export interface Notification {
  id: string,
  type: NotificationType,
  message: string,
  isClicked?: boolean
}
