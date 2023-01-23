import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

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
  extraReduscer: {
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
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
