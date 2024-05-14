import { render, screen, waitFor } from "../../utils/test-utils";
import { NotificationPage } from "./NotificationPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

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

    //expect(screen.getByText("Notifications Today")).toBeDefined();
    await waitFor(() => {
      expect(screen.getAllByText("Gerencia")).toBeDefined();
    });
  });
});
