import { FETCHING, ADDING, DELETING } from './constants';

export const contactsInitialState = {
	items: [],
	isLoading: {
		[FETCHING]: false,
		[ADDING]: false,
		[DELETING]: false,
	},
	error: null,
};
