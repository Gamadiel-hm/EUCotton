import "./emailCard.css";
import { Notification } from "../types/notification";
import { NotificationIcon } from "./notificationIcon";

interface Props extends Notification {
  clickModal: (idNotification: boolean) => void;
  userRef: React.MutableRefObject<Date | null>;
}

export const EmailCard: React.FC<Props> = ({
  date,
  sendMessage,
  type,
  clickModal,
  userRef,
  isView,
  userCreate,
}) => {
  const arrayDate = date.toString().split("T");
  const dateClean =
    arrayDate[0].toString() +
    " " +
    arrayDate[1].split(":", 2).join(":") +
    " hrs.";

  const handleClickAction = () => {
    clickModal(true);
    userRef.current = date;
  };

  const statusView = isView ? "" : "blinkerUp";
  //const classBlink = indexNotification % 2 === 0 ? "blinkerUp1" : "blinkerUp2";

  const charString = userCreate.split("")[0].toUpperCase();
  const joinString = userCreate.slice(1, userCreate.length).toString();

  return (
    <>
      <div className={`container-card-email`}>
        <div className="header-card-email">
          <p>
            <strong>{charString + joinString}</strong>
          </p>
          <p>{dateClean}</p>
        </div>
        <div className="body-card-email">
          <div>
            <div className={`${statusView}`}>
              <NotificationIcon nameIcon={type} />
            </div>
            <p className="truncate">{sendMessage}</p>
          </div>
          <button
            type="button"
            className="button-actions"
            onClick={() => handleClickAction()}
          >
            Action
          </button>
        </div>
      </div>
    </>
  );
};
