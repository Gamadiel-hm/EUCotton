import { useParams } from "react-router-dom";
import { useNotificationStore } from "../../context/notification.store";
import { EmailCard } from "./components/emailCard";
import "./notificationPage.css";
import { useEffect } from "react";

export const NotificationPage: React.FC = () => {
  const addNotification = useNotificationStore(
    (state) => state.notificationList
  );
  const setNotificationAll = useNotificationStore((state) => state.setNotificationAll);

  const {user, room} = useParams();
  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL_SIGNALS + room)
    .then(res => res.json())
    .then(data => setNotificationAll(data))
  }, []);

  return (
    <>
      <h1 className="title-email">Notifications Today</h1>
      <main className="container-email">
        <section className="container-email-card">
          <EmailCard notificationList={addNotification} />
        </section>
        <section className="container-mailView">
          <div className="container-mailView-container"></div>
        </section>
      </main>
    </>
  );
};
