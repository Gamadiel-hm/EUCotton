import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

function App() {
  useEffect(() => {
    const conn = new HubConnectionBuilder()
      .withUrl("https://localhost:7163/api/notifications")
      .build();

    conn.start()
      .then(() => conn.invoke("JoinGroup", { userName: "Carlos", Room: "Beer", Message:"Join Group"}))
      .then(() => console.log("Join group sucefully"))
      .catch((error) => console.log(error.message));

    conn.on("JoinGroupMessage", (message: string) => console.log(message));
    conn.on("groupMessage", (message: string) => console.log(message));

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
