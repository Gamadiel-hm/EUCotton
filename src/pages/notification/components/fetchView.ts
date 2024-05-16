import { useEffect, useRef } from 'react';
import { useNotificationStore } from '../../../context/notification.store';

export const useFetchView = (
  messageId: number,
  userId: number,
  dateCreate: Date,
  refState: React.RefObject<Date>
) => {
  const { setViewNotification } = useNotificationStore((state) => state);
  const refView = useRef<boolean>(false);

  useEffect(() => {
    if (refState.current !== null) {
      fetch(
        import.meta.env.VITE_BASE_URL_API +
          'messageuserinfo?' +
          `messageId=${messageId}` +
          '&' +
          `userInfoId=${userId}`,
        { method: 'Put' }
      )
        .then((res) => res.json())
        .then(() => setViewNotification(dateCreate))
        .catch((error) => console.log(error));
    }
  }, [refState.current]);

  return { refView };
};
