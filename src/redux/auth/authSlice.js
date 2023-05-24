import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';
import { authInitialState } from './initialState';

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	extraReducers: builder => {
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false;
				state.user = { name: null, email: null };
				state.token = '';
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
			})
			.addCase(refreshUser.rejected, state => {
				state.token = '';
			})
			.addMatcher(isAnyOf(register.pending, login.pending, logout.pending), state => {
				state.isLoading = true;
			})
			.addMatcher(isAnyOf(register.rejected, login.rejected, logout.rejected), state => {
				state.isLoading = false;
			});
	},
});

export const authReducer = authSlice.reducer;
