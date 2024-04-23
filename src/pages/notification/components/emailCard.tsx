import "./emailCard.css";
import { NotificationList } from "../notification.d";

interface Props {
  notificationList: NotificationList;
}

export const EmailCard: React.FC<Props> = ({ notificationList }) => {
  return (
    <>
      {notificationList.map((notification, index) => {
        const classView = index % 2 ? "noView" : "view";
        return (
          <div className={"container-card-email " + classView} key={index}>
          <div className="header-card-email">{notification.userName}</div>
          <div className="subHeader-card-email">{notification.group}</div>
          <div className="body-card-email">
            {notification.message}
          </div>
          <div className="footer-card-email">
            <button className="email">low</button>
            <button className="email">medium</button>
            <button className="email">Important</button>
          </div>
        </div>
        )
      })}
    </>
  );
};
