import { create } from 'zustand';
import {
  type NotificationList,
  NotificationFetch,
  notificationFetch
} from '../pages/notification/types/notification';
import {
  notificationAdapter,
  notificationAdapterList
} from '../pages/notification/adapters/notificationAdapter.ts';

interface StoreNotification {
  page: number;
  newPage: () => void;
  notificationList: NotificationList;
  setNotificationAll: (notificationArray: notificationFetch) => void;
  setNotificationOne: (notification: NotificationFetch) => void;
}

export const useNotificationStore = create<StoreNotification>()(set => ({
  page: 1,
  newPage: () => set(state => ({ page: state.page + 1 })),
  notificationList: [],
  setNotificationAll: (notificationArray: notificationFetch) => {
    const mapDate = notificationAdapterList(notificationArray);
    set(state => ({
      notificationList: [...state.notificationList, ...mapDate]
    }));
  },
  setNotificationOne: (notificationFetch: NotificationFetch) => {
    const notificationAdd = notificationAdapter(notificationFetch);
    set(state => ({
      notificationList: [notificationAdd, ...state.notificationList]
    }));
  }
}));
