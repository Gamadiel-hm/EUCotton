import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { useNotificationStore } from "./context/notification.store";
import { Notification } from "./pages/notification/notification.d";

function App() {
  const setArrayNotification = useNotificationStore(state => state.setNotificationAll);
  const setNewNotification = useNotificationStore(state => state.setNotificationOne);

  useEffect(() => {
    const conn = new HubConnectionBuilder()
      .withUrl("https://localhost:7163/api/notifications")
      .build();

    conn.start()
      .then(() => conn.invoke("JoinGroup", { userName: "Carlos", Room: "Beer", Message:"Join Group"}))
      .then(() => fetch("https://localhost:7163/Beer"))
      .then((res) => res.json())
      .then((data) => setArrayNotification(data))
      .catch((error) => console.log(error.message));

    conn.on("JoinGroupMessage", (message: string) => console.log(message));
    conn.on("groupMessage", (message: string, userName: string) => {
      const newMessage: Notification = {userId: "" ,message: message, group: "Beer", userName: userName, date: new Date, location: "" }
      setNewNotification(newMessage);
    });
    

  }, [])
  return (
    <>
      <header className="container-menu">
        <nav className="menu-container">
          <div>
            <Link to="/notification">Notification</Link>
          </div>
          <div>
            <Link to="/notification">List</Link>
          </div>
        </nav>
        <h3>App Front EuCotton</h3>
      </header>
      <Outlet />
    </>
  );
}

export default App;
