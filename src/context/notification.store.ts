import { create } from "zustand";
import {
  type NotificationList,
  Notification,
  NotificationFetch,
  notificationFetch,
} from "../pages/notification/types/notification";
import { convertType } from "../pages/notification/helper/convertType.ts";

interface StoreNotification {
  page: number;
  newPage: () => void;
  notificationList: NotificationList;
  setNotificationAll: (notificationArray: notificationFetch) => void;
  setNotificationOne: (notification: NotificationFetch) => void;
}

export const useNotificationStore = create<StoreNotification>()((set) => ({
  page: 1,
  newPage: () => set((state) => ({ page: state.page + 1 })),
  notificationList: [],
  setNotificationAll: (notificationArray: notificationFetch) => {
    const mapDate: NotificationList = notificationArray.map((msg) => {
      const notificationListAdd: Notification = {
        date: msg.date,
        //group: msg.group,
        sendMessage: msg.sendMessage,
        userInfoId: msg.userInfoId,
        type: convertType(msg.type),
        isView: msg.isView,
        messageId: msg.messageId,
        roomAreaId: msg.roomAreaId,
        userCreate: msg.userCreate,
      };

      return notificationListAdd;
    });
    set((state) => ({
      notificationList: [...state.notificationList, ...mapDate],
    }));
  },
  setNotificationOne: (notification: NotificationFetch) => {
    const notificationAdd: Notification = {
      date: notification.date,
      //group: notification.group,
      sendMessage: notification.sendMessage,
      userInfoId: notification.userInfoId,
      type: convertType(notification.type),
      isView: notification.isView,
      messageId: notification.messageId,
      roomAreaId: notification.roomAreaId,
      userCreate: notification.userCreate,
    };
    set((state) => ({
      notificationList: [notificationAdd, ...state.notificationList],
    }));
  },
}));
