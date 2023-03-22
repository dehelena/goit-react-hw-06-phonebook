import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact(state, action) {
      console.log('action payload', action.payload);
      //action.payload - об'єкт новоствореного контакту

      state.items = [...state.items, action.payload];
      // state.items.push(action.payload); -- теж можна додати таким чином
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
