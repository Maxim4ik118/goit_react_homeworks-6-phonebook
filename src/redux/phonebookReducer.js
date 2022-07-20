import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  setContacts,
  setFilterTerm,
} from './phonebookActions';

const initialState = {
  contacts: [],
  filter: '',
};

export default createReducer(initialState, {
  [addContact]: (state, action) => {
    state.contacts = [...state.contacts, action.payload];
  },
  [deleteContact]: (state, action) => {
    state.contacts = state.contacts.filter(
      contact => contact.id !== action.payload
    );
  },
  [setContacts]: (state, action) => {
    state.contacts = action.payload;
  },
  [setFilterTerm]: (state, action) => {
    state.filter = action.payload;
  },
});
