import {
  render,
  screen,
  fireEvent,
  userEvent,
} from "../../../utils/test-utils";
import { objectString } from "../helper/convertType";
import { notificationTypeFilter } from "../types/notification";
import { Filters } from "./filters";

describe("Component Filter Email", () => {
  let typeNotification: notificationTypeFilter = "all";
  let filterSearch: string = "";

  let containerElement: HTMLElement;
  const handleFilterSet = (filterVAlue: notificationTypeFilter) => {
    typeNotification = filterVAlue;
    console.log(filterVAlue);
  };
  const handleFilterSearch = (search: string) => {
    filterSearch += search;
  };

  beforeEach(() => {
    const { container } = render(
      <Filters
        filterSet={handleFilterSet}
        filterState={typeNotification}
        searchFilter={handleFilterSearch}
        searchState={filterSearch}
      />
    );
    containerElement = container;
  });

  test("should filter for type notification of interface notificationTypeFilter", async () => {
    for (let i = 1; i <= 4; i++) {
      const typeNOtification = objectString[i as keyof typeof objectString];
      fireEvent.change(screen.getByText("Filter All"), {
        target: { value: `${typeNOtification}` },
      });

      const className = containerElement.querySelector(
        ".filter-email"
      ) as HTMLSelectElement;

      expect(className.value).toBe(typeNOtification);
    }
  });

  test("should filter for search input", async () => {
    const inputSearch = screen.getByPlaceholderText("search notification");
    const searchFilter = "Message";
    await userEvent.type(inputSearch, searchFilter);
    expect(filterSearch).toBe(searchFilter);
  });
});
