import { useParams } from "react-router-dom";
import { useNotificationStore } from "../../context/notification.store";
import { EmailCard } from "./components/emailCard";
import "./notificationPage.css";
import { useFetch } from "./hooks/useFetch";
//import { useApiObserver } from "./hooks/useApiObserver";
import InfiniteScroll from "react-infinite-scroll-component";

export const NotificationPage: React.FC = () => {
  const { room, roomId } = useParams();
  useFetch(roomId ?? "", 6, room ?? "");

  const { notificationList, newPage } = useNotificationStore((state) => state);
  //const { observerTarget } = useApiObserver();

  return (
    <>
      <h1 className="title-email">Notifications Today</h1>
      <InfiniteScroll
        dataLength={notificationList.length}
        next={newPage}
        hasMore={true}
        loader={<p>Loading...</p>}
      >
        <section className="container-email">
          {notificationList.map((notify, index) => (
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
      </InfiniteScroll>
    </>
  );
};
