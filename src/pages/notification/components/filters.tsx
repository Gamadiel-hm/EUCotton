import "./filters.css";
import { notificationTypeFilter } from "../types/notification";
import { FILTER_NOTIFICATION } from "../types/notification.const";
import { convertTypeFilter } from "../helper/convertTypeFilter";

interface Props {
  filterState: notificationTypeFilter;
  filterSet: (filterVAlue: notificationTypeFilter) => void;
  searchState: string;
  searchFilter: (search: string) => void;
}

export const Filters: React.FC<Props> = ({
  filterState,
  filterSet,
  searchState,
  searchFilter,
}) => {
  const handleChangeFilter = (selectOption: string) => {
    if (selectOption.toUpperCase() in FILTER_NOTIFICATION) {
      const value = convertTypeFilter(selectOption);
      filterSet(value);
    }
  };

  const handleSearchNotification = (searchValue: string) => {
    searchFilter(searchValue);
  };
  return (
    <>
      <input
        type="text"
        value={searchState}
        onChange={(e) => handleSearchNotification(e.currentTarget.value)}
        placeholder="search notification"
        className="search-filter"
      />
      <select
        name="Filter"
        title="type Notification"
        value={filterState}
        onChange={(e) => handleChangeFilter(e.currentTarget.value)}
      >
        <option value={FILTER_NOTIFICATION.ALL}>Filter All</option>
        <option value={FILTER_NOTIFICATION.SUCCESS}>Success</option>
        <option value={FILTER_NOTIFICATION.ERROR}>Error</option>
        <option value={FILTER_NOTIFICATION.WARNING}>Warning</option>
        <option value={FILTER_NOTIFICATION.INFO}>Info</option>
      </select>
    </>
  );
};
