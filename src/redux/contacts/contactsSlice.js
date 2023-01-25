import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/authOperations';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperations';

const handlePendig = state => {
  state.contactsIsLoading = true;
};

const handleRejected = (state, action) => {
  state.contactsError = action.payload;
  state.contactsIsLoading = false;
};

const initialState = {
  items: [],
  contactsIsLoading: false,
  contactsError: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: handlePendig,
    [fetchContacts.fulfilled](state, action) {
      state.contactsIsLoading = false;
      state.contactsError = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePendig,
    [addContact.fulfilled](state, action) {
      state.contactsIsLoading = false;
      state.contactsError = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePendig,
    [deleteContact.fulfilled](state, action) {
      state.contactsIsLoading = false;
      state.contactsError = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,

    [logOut.fulfilled](state) {
      state.contactsIsLoading = false;
      state.contactsError = null;
      state.items = [];
    },

    [updateContact.pending]: handlePendig,
    [updateContact.fulfilled](state, action) {
      state.contactsIsLoading = false;
      state.contactsError = null;

      const { id, name, number } = action.payload;
      const index = state.items.findIndex(contact => contact.id === id);
      state.items[index].name = name;
      state.items[index].number = number;
    },
    [updateContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
