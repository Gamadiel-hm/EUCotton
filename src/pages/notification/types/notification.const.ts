import { Notification } from './notification';

export const TYPE_NOTIFICATION = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info'
} as const;

export const FILTER_NOTIFICATION = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  ALL: 'all'
} as const;

export const initialNotification: Notification = {
  messageId: 1,
  date: new Date(),
  isView: false,
  roomAreaId: 1,
  sendMessage: '',
  type: 'success',
  userCreate: '',
  userInfoId: 1
};
