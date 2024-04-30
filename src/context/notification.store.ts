import { create } from "zustand";
import {
  type NotificationList,
  Notification,
  NotificationFetch,
  notificationFetch,
} from "../pages/notification/types/notification";
import { convertType } from "../pages/notification/helper/convertType.ts";

interface StoreNotification {
  notificationList: NotificationList;
  setNotificationAll: (notificationArray: notificationFetch) => void;
  setNotificationOne: (notification: NotificationFetch) => void;
}

export const useNotificationStore = create<StoreNotification>()((set) => ({
  notificationList: [],
  setNotificationAll: (notificationArray: notificationFetch) => {
    const mapDate: NotificationList = notificationArray.map((msg) => {
      const notificationListAdd: Notification = {
        date: msg.date,
        group: msg.group,
        sendMessage: msg.sendMessage,
        userId: msg.userId,
        userName: msg.userId,
        type: convertType(msg.type),
      };

      return notificationListAdd;
    });
    set({ notificationList: mapDate });
  },
  setNotificationOne: (notification: NotificationFetch) => {
    const notificationAdd: Notification = {
      date: notification.date,
      group: notification.group,
      sendMessage: notification.sendMessage,
      userId: notification.userId,
      userName: notification.userId,
      type: convertType(notification.type),
    };
    set((state) => ({
      notificationList: [notificationAdd, ...state.notificationList],
    }));
  },
}));
