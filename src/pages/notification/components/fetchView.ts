import { useEffect, useRef } from 'react';

export const fetchView = (
  messageId: number,
  userId: number,
  refState: React.RefObject<number>
) => {
  const refView = useRef<boolean>(false);
  useEffect(() => {
    if (refState.current !== 0) {
      fetch(
        import.meta.env.VITE_BASE_URL_API +
          'messageuserinfo?' +
          `messageId=${messageId}` +
          '&' +
          `userInfoId=${userId}`,
        { method: 'Put' }
      )
        .then(res => res.json())
        .then(data => {
          data ? (refView.current = true) : (refView.current = false);
        })
        .catch(error => console.log(error));
    }
  }, [refState.current]);

  return { refView };
};
