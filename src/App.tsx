import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { useNotificationStore } from "./context/notification.store";
import { Notification } from "./pages/notification/types/notification";
import { useJoinGroup } from "./context/joinGroup.store";
import { convertType } from "./pages/notification/helper/convertType";

function App() {
  const setNewNotification = useNotificationStore(
    (state) => state.setNotificationOne
  );
  const newGRoup = useJoinGroup((state) => state.joinGroup);

  useEffect(() => {
    const conn = new HubConnectionBuilder()
      .withUrl(import.meta.env.VITE_BASE_URL_HUB)
      .build();

    conn
      .start()
      .then(() =>
        conn.invoke("JoinGroup", {
          userName: "Carlos",
          Room: newGRoup,
          Message: "Join Group",
        })
      )
      .then(() => console.log("Join Group"))
      .catch((error) => console.log(error.message));

    conn.on("JoinGroupMessage", (message: string) => console.log(message));
    conn.on("groupMessage", (newNotification: Notification) => {
      console.log(newNotification);
      //setNewNotification(newMessage);
    });
    console.log(convertType(1));
  }, [newGRoup]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
