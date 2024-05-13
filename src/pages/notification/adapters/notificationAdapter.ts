import { convertType } from '../helper/convertType';
import {
  notificationFetch,
  Notification,
  NotificationList,
  NotificationFetch
} from '../types/notification';

export const notificationAdapterList = (
  notificationFetch: notificationFetch
) => {
  const adapter: NotificationList = notificationFetch.map(item => {
    const notification: Notification = {
      date: item.date,
      sendMessage: item.sendMessage,
      userInfoId: item.userInfoId,
      type: convertType(item.type),
      isView: item.isView,
      messageId: item.messageId,
      roomAreaId: item.roomAreaId,
      userCreate: item.userCreate
    };
    return notification;
  });

  return adapter;
};

export const notificationAdapter = (notificationFetch: NotificationFetch) => {
  const adapter: Notification = {
    date: notificationFetch.date,
    sendMessage: notificationFetch.sendMessage,
    userInfoId: notificationFetch.userInfoId,
    type: convertType(notificationFetch.type),
    isView: notificationFetch.isView,
    messageId: notificationFetch.messageId,
    roomAreaId: notificationFetch.roomAreaId,
    userCreate: notificationFetch.userCreate
  };
  return adapter;
};
