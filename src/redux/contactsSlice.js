import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, phone) {
        return { payload: { id: nanoid(), name, phone } };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(c => c.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
