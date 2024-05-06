import { useParams } from "react-router-dom";
import { useNotificationStore } from "../../context/notification.store";
import { EmailCard } from "./components/emailCard";
import "./notificationPage.css";
import { useFetch } from "./hooks/useFetch";
import InfiniteScroll from "react-infinite-scroll-component";
import { Filters } from "./components/filters";
import { useState } from "react";
import { notificationTypeFilter } from "./types/notification";

export const NotificationPage: React.FC = () => {
  const [filterState, setFilterState] = useState<notificationTypeFilter>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const { room, roomId } = useParams();
  useFetch(roomId ?? "", 6, room ?? "");

  const { notificationList, newPage } = useNotificationStore((state) => state);

  const filter =
    filterState === "all"
      ? notificationList
      : notificationList.filter(
          (notification) => notification.type === filterState
        );

  const search =
    searchFilter === ""
      ? filter
      : filter.filter((Notification) =>
          Notification.sendMessage.includes(searchFilter)
        );

  return (
    <>
      <h1 className="title-email">Notifications Today</h1>

      <section className="filters">
        <Filters
          filterState={filterState}
          filterSet={setFilterState}
          searchFilter={setSearchFilter}
          searchState={searchFilter}
        />
      </section>

      <InfiniteScroll
        dataLength={notificationList.length}
        next={newPage}
        hasMore={true}
        loader={<p className="element-infinityScroll">No more result...</p>}
      >
        <section className="container-email">
          {search.map((notify, index) => (
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
