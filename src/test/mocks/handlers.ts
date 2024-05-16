import { http, HttpResponse } from "msw";
import { mockNotification } from "../mockData/notificationListMock";

export const handlers = [
  http.get(
    "https://localhost:7197/api/v1/notification/:userId/:roomId/options",
    () => {
      return HttpResponse.json(
        {
          ...mockNotification,
        },
        { status: 200 }
      );
    }
  ),
];
