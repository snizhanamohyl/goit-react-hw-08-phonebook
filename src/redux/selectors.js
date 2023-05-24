export const selectUserName = state => state.auth.user.name;

export const selectToken = state => state.auth.token;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectContacts = state => state.contacts.items;

export const selectContactsIsLoading = state => state.contacts.isLoading;

export const selectAuthIsLoading = state => state.auth.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;
