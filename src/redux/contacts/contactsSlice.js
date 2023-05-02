import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './operations';

const operations = [fetchContacts, addContact, deleteContact];

const makeOperationsWithStatusArr = status => {
	return operations.map(operation => operation[status]);
};

const handlePending = state => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const handleFetchContactsFulfilled = (state, action) => {
	state.isLoading = false;
	state.items = action.payload;
	state.error = null;
};

const handleAddContactFulfilled = (state, action) => {
	state.isLoading = false;
	state.error = null;
	state.items.push(action.payload);
};

const handleDeleteFulfilled = (state, action) => {
	state.isLoading = false;
	state.error = null;
	const index = state.items.findIndex(contact => contact.id === action.payload.id);
	state.items.splice(index, 1);
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: contactsInitialState,
	extraReducers: builder => {
		builder
			.addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
			.addCase(addContact.fulfilled, handleAddContactFulfilled)
			.addCase(deleteContact.fulfilled, handleDeleteFulfilled)
			.addMatcher(isAnyOf(...makeOperationsWithStatusArr('pending')), handlePending)
			.addMatcher(isAnyOf(...makeOperationsWithStatusArr('rejected')), handleRejected);
	},
});

export const contactsReducer = contactsSlice.reducer;
