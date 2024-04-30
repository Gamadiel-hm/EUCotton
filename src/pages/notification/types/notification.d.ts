import { TYPE_NOTIFICATION } from "./notification.const";

export interface Notification {
    userId: string,
    userName: string,
    sendMessage: string,
    type: notificationType,
    group: int,
    date: Date,
    //location: string
}

export type NotificationList = Notification[];
export type notificationType = (typeof TYPE_NOTIFICATION)[keyof typeof TYPE_NOTIFICATION]