import { NotificationKeys } from '../types/notification';

export const convertType = (typeInt: NotificationKeys) => {
  return objectString[typeInt];
};

export const objectString = {
  1: 'success',
  2: 'error',
  3: 'warning',
  4: 'info'
} as const;
