export interface Notification {
    userId: string,
    userName: string,
    message: string,
    group: string,
    date: Date,
    location: string
}

export type NotificationList = Notification[];