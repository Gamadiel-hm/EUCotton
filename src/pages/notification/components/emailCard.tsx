import "./emailCard.css";
import { Notification } from "../types/notification";
import { NotificationIcon } from "./notificationIcon";

interface Props extends Notification {
  clickModal: (idNotification: boolean) => void;
  userRef: React.MutableRefObject<number>;
}

export const EmailCard: React.FC<Props> = ({
  date,
  sendMessage,
  type,
  clickModal,
  userRef,
  isView,
  userCreate,
  messageId,
}) => {
  const arrayDate = date.toString().split("T");
  const dateClean =
    arrayDate[0].toString() +
    " " +
    arrayDate[1].split(":", 2).join(":") +
    " hrs.";

  const handleClickAction = () => {
    clickModal(true);
    userRef.current = messageId;
  };

  const statusView = isView ? "🍟" : "🥞";

  return (
    <>
      <div className={`container-card-email ${type}`}>
        <div className="header-card-email">
          <p>
            {statusView} {userCreate}
          </p>
          <p>{dateClean}</p>
        </div>
        <div className="body-card-email">
          <div>
            <div className="svg-icon">
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
