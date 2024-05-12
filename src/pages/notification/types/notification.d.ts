import { objectString } from "../helper/convertType";
import { FILTER_NOTIFICATION, TYPE_NOTIFICATION } from "./notification.const";

export interface Notification {
  messageId: int;
  userInfoId: int;
  roomAreaId: int;
  sendMessage: string;
  type: notificationType;
  isView: boolean;
  userCreate: string;
  //group: int;
  date: Date;
  //location: string
}
export interface NotificationFetch {
  messageId: int;
  userInfoId: int;
  roomAreaId: int;
  sendMessage: string;
  type: objectType;
  isView: boolean;
  userCreate: string;
  date: Date;
  //location: string
}

type KeysMatching<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

export type NotificationList = Notification[];
export type notificationType =
  (typeof TYPE_NOTIFICATION)[keyof typeof TYPE_NOTIFICATION];
export type notificationFetch = NotificationFetch[];
type NotificationKeys = KeysMatching<typeof objectString, string>;

// type filters
export type notificationTypeFilter =
  (typeof FILTER_NOTIFICATION)[keyof typeof FILTER_NOTIFICATION];
