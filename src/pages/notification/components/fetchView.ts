import { useEffect, useState } from "react";

export const fetchView = (messageId: number, userId: number) => {
  const [fetchStatus, setFetchStatus] = useState<boolean>(false);
  useEffect(() => {
    fetch(
      import.meta.env.VITE_BASE_URL_API +
        "messageuserinfo?" +
        `messageId=${messageId}` +
        "/" +
        `userInfoId=${userId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFetchStatus(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return { fetchStatus };
};
