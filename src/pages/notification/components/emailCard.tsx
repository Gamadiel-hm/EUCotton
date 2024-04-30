import "./emailCard.css";
import { Notification } from "../types/notification";
import { NotificationIcon } from "./notificationIcon";

interface Props extends Notification {}

export const EmailCard: React.FC<Props> = ({
  date,
  group,
  sendMessage,
  userId,
  userName,
  type,
}) => {
  return (
    <>
      <div className={`container-card-email ${type}`}>
        <div className="header-card-email">
          <p>{userName}</p>
          <p>{date.toString()}</p>
        </div>
        <div className="body-card-email">
          <div className="svg-icon">
            <NotificationIcon nameIcon={type} />
          </div>
          <p className="truncate">{sendMessage}</p>
        </div>
      </div>
    </>
  );
};
