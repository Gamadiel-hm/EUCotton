import { useEffect, useRef } from "react";
import { useNotificationStore } from "../../../context/notification.store";

export const fetchView = (
  messageId: number,
  userId: number,
  message: string,
  refState: React.RefObject<number>
) => {
  const { setViewNotification } = useNotificationStore((state) => state);
  const refView = useRef<boolean>(false);
  useEffect(() => {
    if (refState.current !== 0) {
      fetch(
        import.meta.env.VITE_BASE_URL_API +
          "messageuserinfo?" +
          `messageId=${messageId}` +
          "&" +
          `userInfoId=${userId}`,
        { method: "Put" }
      )
        .then((res) => res.json())
        .then(() => setViewNotification(message))
        .catch((error) => console.log(error));
    }
  }, [refState.current]);

  return { refView };
};
