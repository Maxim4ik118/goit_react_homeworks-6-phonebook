import { configureStore } from '@reduxjs/toolkit';
import phonebook from './phonebookReducer';

const store = configureStore({
  reducer: { phonebook },
});

export default store;
