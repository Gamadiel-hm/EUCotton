import { useParams } from "react-router-dom";
import { useNotificationStore } from "../../context/notification.store";
import { EmailCard } from "./components/emailCard";
import "./notificationPage.css";
import { useEffect } from "react";
import { useJoinGroup } from "../../context/joinGroup.store";

export const NotificationPage: React.FC = () => {
  const { room, roomId } = useParams();
  const addNotification = useNotificationStore(
    (state) => state.notificationList
  );
  const setNotificationAll = useNotificationStore(
    (state) => state.setNotificationAll
  );
  const newGroup = useJoinGroup((state) => state.setJoinGroup);

  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL_SIGNALS + roomId)
      .then((res) => res.json())
      .then((data) => {
        setNotificationAll(data.data);
        console.log(data.data);
      })
      .catch((error) => console.log(error));
    newGroup(room ?? "");
  }, []);

  return (
    <>
      <h1 className="title-email">Notifications Today</h1>
      <section className="container-email">
        {addNotification.map((notify, index) => (
          <EmailCard
            date={notify.date}
            group={room}
            sendMessage={notify.sendMessage}
            userName={notify.userId}
            userId={notify.userId}
            type={notify.type}
            key={index}
          />
        ))}
      </section>
    </>
  );
};
