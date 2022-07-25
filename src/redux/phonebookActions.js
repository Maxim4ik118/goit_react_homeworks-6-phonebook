import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'phonebook/addContact',
  function prepare(contactData) {
    return {
      payload: {
        id: nanoid(),
        ...contactData,
      },
    };
  }
);
export const deleteContact = createAction('phonebook/deleteContact');
export const setFilterTerm = createAction('phonebook/setFilterTerm');
