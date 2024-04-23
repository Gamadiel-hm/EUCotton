export interface Notification {
    userId: string,
    message: string,
    group: string,
    date: Date,
    location: string
}


export type NotificationList = Notification[];