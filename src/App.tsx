import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { Notification } from "./pages/notification/notification";

interface Notification {
  userName: string,
  room: string,
  message: string
}

function App() {
  const [message, setMessage] = useState<Notification[]>([]);


  useEffect(() => {
    const conn = new HubConnectionBuilder()
      .withUrl("https://localhost:7163/api/notifications")
      .build();

    conn.start()
      .then(() => conn.invoke("JoinGroup", { userName: "Carlos", Room: "Beer", Message:"Join Group"}))
      .then(() => fetch("https://localhost:7163/Beer"))
      .then((res) => res.json())
      .then((data) => setMessage(data))
      .catch((error) => console.log(error.message));

    conn.on("JoinGroupMessage", (message: string) => console.log(message));
    conn.on("groupMessage", (message: string, userName: string) => {
      const newMessage: Notification = {message: message, room: "Beer", userName: userName}
      setMessage((msg) => [...msg, newMessage])
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
      <Notification message={message} />
    </>
  );
}

export default App;
