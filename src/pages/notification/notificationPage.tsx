import { useParams } from 'react-router-dom';
import { useNotificationStore } from '../../context/notification.store';
import { EmailCard } from './components/emailCard';
import './notificationPage.css';
import { useFetch } from './hooks/useFetch';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Filters } from './components/filters';
import { useRef, useState } from 'react';
import { notificationTypeFilter } from './types/notification';
import { Modal } from './components/modal';
import { fetchView } from './components/fetchView';
import { initialNotification } from './types/notification.const';
import { Skeleton } from '../../components/skeleton';

export const NotificationPage: React.FC = () => {
  const [filterState, setFilterState] = useState<notificationTypeFilter>('all');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [clickModal, setClickModal] = useState<boolean>(false);
  const refGetUserIf = useRef<Date>(null);
  const { userId, room, roomId } = useParams();
  useFetch(userId ?? '', roomId ?? '', 6, room ?? '');

  const { notificationList, newPage } = useNotificationStore((state) => state);

  const filter =
    filterState === 'all'
      ? notificationList
      : notificationList.filter(
          (notification) => notification.type === filterState
        );

  const search =
    searchFilter === ''
      ? filter
      : filter.filter((Notification) =>
          Notification.sendMessage.toLowerCase().includes(searchFilter)
        );

  const clickNotificationFilter =
    refGetUserIf.current !== null
      ? search.filter((f) => f.date === refGetUserIf.current)[0]
      : initialNotification;

  fetchView(
    clickNotificationFilter.messageId,
    clickNotificationFilter.userInfoId,
    clickNotificationFilter.date,
    refGetUserIf
  );

  return (
    <>
      <h1 className='title-email'>Notifications Today</h1>

      <section className='filters'>
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
        loader={<p className='element-infinityScroll'>No more result...</p>}
      >
        <section className='container-email'>
          {search.length !== 0 ? (
            search.map((notify, index) => (
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
                key={index}
              />
            ))
          ) : (
            <Skeleton />
          )}
        </section>
      </InfiniteScroll>
      <Modal closeModal={setClickModal} statusModal={clickModal}>
        <>
          {refGetUserIf.current !== null ? (
            <div className='modal-header'>
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
