import { useParams } from "react-router-dom";
import { useNotificationStore } from "../../context/notification.store";
import { EmailCard } from "./components/emailCard";
import "./notificationPage.css";
import { useFetch } from "./hooks/useFetch";
import InfiniteScroll from "react-infinite-scroll-component";
import { Filters } from "./components/filters";
import { useRef, useState } from "react";
import { notificationTypeFilter } from "./types/notification";
import { Modal } from "./components/modal";
import { fetchView } from "./components/fetchView";
import { initialNotification } from "./types/notification.const";

export const NotificationPage: React.FC = () => {
  const [filterState, setFilterState] = useState<notificationTypeFilter>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [clickModal, setClickModal] = useState<boolean>(false);
  const refGetUserIf = useRef<number>(0);
  const { userId, room, roomId } = useParams();
  useFetch(userId ?? "", roomId ?? "", 6, room ?? "");

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
          Notification.sendMessage.toLowerCase().includes(searchFilter)
        );

  const clickNotificationFilter =
    refGetUserIf.current !== 0
      ? search.filter((f) => f.messageId === refGetUserIf.current)[0]
      : initialNotification;

  fetchView(
    clickNotificationFilter.messageId,
    clickNotificationFilter.userInfoId,
    clickNotificationFilter.sendMessage,
    refGetUserIf
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
              //group={room}
              sendMessage={notify.sendMessage}
              userInfoId={notify.userInfoId}
              type={notify.type}
              clickModal={setClickModal}
              userRef={refGetUserIf}
              isView={notify.isView}
              messageId={notify.messageId}
              roomAreaId={notify.roomAreaId}
              userCreate={notify.userCreate}
              indexNotification={index}
              key={index}
            />
          ))}
        </section>
      </InfiniteScroll>
      <Modal closeModal={setClickModal} statusModal={clickModal}>
        <>
          {refGetUserIf.current !== 0 ? (
            <div className="modal-header">
              <div>{clickNotificationFilter.roomAreaId}</div>
              <div>{clickNotificationFilter.sendMessage}</div>
              <div>{clickNotificationFilter.isView}</div>
              <div>{clickNotificationFilter.userCreate}</div>
            </div>
          ) : (
            <></>
          )}
        </>
      </Modal>
    </>
  );
};
