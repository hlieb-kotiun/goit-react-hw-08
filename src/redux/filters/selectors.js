import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

//
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectContacts],
  (filter, contacts) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
