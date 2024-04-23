import { useNotificationStore } from "../../context/notification.store";
import { EmailCard } from "./components/emailCard";
import "./notificationPage.css";

interface Props {}

export const NotificationPage: React.FC<Props> = () => {
  const addNotification = useNotificationStore(
    (state) => state.notificationList
  );

  return (
    <>
    <h1 className="title-email">Notifications Today</h1>
    <main className="container-email">
        <section className="container-email-card">
            <EmailCard notificationList={addNotification} />
        </section>
        <section className="container-mailView">
            <div className="container-mailView-container">

            </div>
        </section>
    </main>
    </>
  );
};
