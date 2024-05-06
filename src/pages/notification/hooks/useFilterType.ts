import { notificationType } from "../types/notification";
import { TYPE_NOTIFICATION } from "../types/notification.const";

export const useFilterType = (type: notificationType) => {
  if (type in TYPE_NOTIFICATION) {
    console.log(type);
  }
};
