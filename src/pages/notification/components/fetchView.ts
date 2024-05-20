import { useEffect, useRef } from 'react';
import { useNotificationStore } from '../../../context/notification.store';

export const useFetchView = (
  messageId: number,
  userId: number,
  dateCreate: Date,
  refState: React.RefObject<Date>
) => {
  const { setViewNotification, setFullMessage } = useNotificationStore((state) => state);
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
        .then(() => {
          setViewNotification(dateCreate)
          fetch(import.meta.env.VITE_BASE_URL_SIGNALS + `fullmassege?idMessage=${messageId}`)
            .then(res => res.json())
            .then(data => setFullMessage(data.data))
            .catch(() => {})
        })
        .catch((error) => console.log(error));
    }
  }, [refState.current]);

  return { refView };
};
