import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './operations';
import { FETCHING, ADDING, DELETING } from './constants';

const handleFetchContactsRejected = state => {
	state.isLoading[FETCHING] = false;
};
const handleAddContactRejected = state => {
	state.isLoading[ADDING] = false;
};
const handleDeleteContactRejected = state => {
	state.isLoading[DELETING] = false;
};

const handleFetchContactsPending = state => {
	state.isLoading[FETCHING] = true;
};

const handleFetchContactsFulfilled = (state, action) => {
	state.isLoading[FETCHING] = false;
	state.items = action.payload;
	state.error = null;
};

const handleAddContactPending = state => {
	state.isLoading[ADDING] = true;
};

const handleAddContactFulfilled = (state, action) => {
	state.isLoading[ADDING] = false;
	state.items.push(action.payload);
};

const handleDeleteContactPending = state => {
	state.isLoading[DELETING] = true;
};

const handleDeleteContactFulfilled = (state, action) => {
	state.isLoading[DELETING] = false;
	const index = state.items.findIndex(contact => contact.id === action.payload.id);
	state.items.splice(index, 1);
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: contactsInitialState,
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.pending, handleFetchContactsPending)
			.addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
			.addCase(fetchContacts.rejected, handleFetchContactsRejected)
			.addCase(addContact.pending, handleAddContactPending)
			.addCase(addContact.fulfilled, handleAddContactFulfilled)
			.addCase(addContact.rejected, handleAddContactRejected)
			.addCase(deleteContact.pending, handleDeleteContactPending)
			.addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
			.addCase(deleteContact.rejected, handleDeleteContactRejected);
	},
});

export const contactsReducer = contactsSlice.reducer;
