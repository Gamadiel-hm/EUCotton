import { TYPE_NOTIFICATION } from "./notification.const";
import { OBJECT_RETURN_STRING } from "../helper/convertType.ts";

export interface Notification {
  userId: string;
  userName: string;
  sendMessage: string;
  type: notificationType;
  group: int;
  date: Date;
  //location: string
}
export interface NotificationFetch {
  userId: string;
  userName: string;
  sendMessage: string;
  type: objectType;
  group: int;
  date: Date;
  //location: string
}

export interface ResponseApi<T> {
  succeeded: boolean;
  message: string;
  errors: string[];
  data: T;
}

export type NotificationList = Notification[];
export type notificationType =
  (typeof TYPE_NOTIFICATION)[keyof typeof TYPE_NOTIFICATION];
export type objectType = keyof OBJECT_RETURN_STRING;
export type notificationFetch = NotificationFetch[];
