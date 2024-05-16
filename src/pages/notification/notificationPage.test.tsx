import { mockNotification } from "../../test/mockData/notificationListMock";
import { render, screen, waitFor } from "../../utils/test-utils";
import { NotificationPage } from "./NotificationPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { convertDate } from "./helper/convertDate";

describe("Test Notification Page", () => {
  test("should be a title Page Notification", () => {
    render(<NotificationPage />);
    expect(screen.getByText("Notifications Today")).toBeDefined();
  });

  test("should be a card notification", async () => {
    render(
      <MemoryRouter initialEntries={["/notification/1/gerencia/1"]}>
        <Routes>
          <Route
            path="/notification/:userId/:room/:roomId"
            element={<NotificationPage />}
          />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      const numItem = mockNotification.data.length;
      const getDate = mockNotification.data.map((item) =>
        convertDate.convertString(item.date.toISOString())
      );
      getDate.forEach((dateView) => expect(dateView).toBe(dateView));
      const numItems = screen.getAllByText("Gerencia");
      expect(numItems.length).toBe(numItem);
    });
  });
});
