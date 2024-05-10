import { useEffect } from "react";
import { useNotificationStore } from "../../../context/notification.store";
import { useJoinGroup } from "../../../context/joinGroup.store";

export const useFetch = (
  userId: string,
  roomId: string,
  items: number,
  room: string
) => {
  const setNotificationAll = useNotificationStore(
    (state) => state.setNotificationAll
  );
  const newGroup = useJoinGroup((state) => state.setJoinGroup);

  const { page } = useNotificationStore((state) => state);

  useEffect(() => {
    fetch(
      import.meta.env.VITE_BASE_URL_SIGNALS +
        userId +
        "/" +
        roomId +
        `/options?page=${page}&items=${items}`
    )
      .then((res) => res.json())
      .then((data) => {
        setNotificationAll(data.data);
        newGroup(room);
      })
      .catch((error) => console.log(error));
  }, [page]);
};
