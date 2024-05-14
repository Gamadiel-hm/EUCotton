import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "https://localhost:7197/api/v1/notification/:userId/:roomId/options",
    () => {
      return HttpResponse.json(
        {
          data: [
            {
              messageId: 20,
              userInfoId: 1,
              roomAreaId: 1,
              sendMessage: "Allllllllllllloooooooooooooooooooooooooooooooooooo",
              type: 4,
              isView: true,
              userCreate: "gerencia",
              date: "2024-05-14T08:36:14.373",
            },
          ],
        },
        { status: 200 }
      );
    }
  ),
];
