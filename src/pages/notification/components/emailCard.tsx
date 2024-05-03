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
  const arrayDate = date.toString().split("T");
  const dateClean =
    arrayDate[0].toString() + " " + arrayDate[1].split(":", 2).join(":");
  return (
    <>
      <div className={`container-card-email ${type}`}>
        <div className="header-card-email">
          <p>
            {userName} - {group}
          </p>
          <p>
            {dateClean} - {userId}
          </p>
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
