import { createAction } from '@reduxjs/toolkit';

export const setContacts = createAction('phonebook/setContacts');
export const addContact = createAction('phonebook/addContact');
export const deleteContact = createAction('phonebook/deleteContact');
export const setFilterTerm = createAction('phonebook/setFilterTerm');
