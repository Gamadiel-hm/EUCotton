import { Outlet } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { useNotificationStore } from "./context/notification.store";
import { Notification } from "./pages/notification/notification.d";
import { useJoinGroup } from "./context/joinGroup.store";

function App() {
  const [newGroupState, setNewGroupState] = useState<string>();
  const setNewNotification = useNotificationStore(
    (state) => state.setNotificationOne
  );
  const newGRoup = useJoinGroup(state => state.joinGroup)

  useEffect(() => {
    const conn = new HubConnectionBuilder()
      .withUrl(import.meta.env.VITE_BASE_URL_HUB)
      .build();

    setNewGroupState(group => group = newGRoup)

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
    conn.on("groupMessage", (message: string, userName: string) => {
      const newMessage: Notification = {
        userId: "",
        message: message,
        group: "Beer",
        userName: userName,
        date: new Date(),
        location: "",
      };
      setNewNotification(newMessage);
      console.log("new message");
    });
  }, [newGroupState]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
