import { notificationTypeFilter } from "../types/notification";
import { FILTER_NOTIFICATION } from "../types/notification.const";

export const convertTypeFilter = (value: string) => {
  let valueReturn: notificationTypeFilter = "all";

  switch (value) {
    case "success":
      valueReturn = FILTER_NOTIFICATION.SUCCESS;
      break;
    case "error":
      valueReturn = FILTER_NOTIFICATION.ERROR;
      break;
    case "warning":
      valueReturn = FILTER_NOTIFICATION.WARNING;
      break;
    case "info":
      valueReturn = FILTER_NOTIFICATION.INFO;
      break;
    default:
      break;
  }

  return valueReturn;
};
