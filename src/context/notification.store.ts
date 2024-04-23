import { create } from 'zustand'
import {type NotificationList, Notification} from "../pages/notification/notification.d"

interface StoreNotification  {
  notificationList: NotificationList,
  setNotificationAll: (notificationArray: NotificationList) => void,
  setNotificationOne: (notification: Notification) => void
}

export const useNotificationStore = create<StoreNotification>()((set) => ({
  notificationList: [],
  setNotificationAll: (notificationArray: NotificationList) => set({notificationList: notificationArray}),
  setNotificationOne: (notification: Notification) => set(state => ({notificationList: [notification, ...state.notificationList]}))
}))