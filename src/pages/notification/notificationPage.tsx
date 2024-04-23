import { useParams } from "react-router-dom";
import { useNotificationStore } from "../../context/notification.store";
import { EmailCard } from "./components/emailCard";
import "./notificationPage.css";
import { useEffect } from "react";
import { useJoinGroup } from "../../context/joinGroup.store";

export const NotificationPage: React.FC = () => {
  const {user, room} = useParams();
  const addNotification = useNotificationStore(
    (state) => state.notificationList
  );
  const setNotificationAll = useNotificationStore((state) => state.setNotificationAll);
  const newGroup = useJoinGroup(state => state.setJoinGroup);

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL_SIGNALS + room)
    .then(res => res.json())
    .then(data => setNotificationAll(data));
    newGroup(room ?? "");
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
