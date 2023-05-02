import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';
import { authInitialState } from './initialState';

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	extraReducers: builder => {
		builder
			.addCase(register.pending, (state, action) => {
				return state;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(register.rejected, (state, action) => {
				return state;
			})
			.addCase(login.pending, (state, action) => {
				return state;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(login.rejected, (state, action) => {
				return state;
			})
			.addCase(logout.pending, (state, action) => {
				return state;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.user = { name: null, email: null };
				state.token = '';
			})
			.addCase(logout.rejected, (state, action) => {
				return state;
			})
			.addCase(refreshUser.pending, (state, action) => {
				return state;
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
			})
			.addCase(refreshUser.rejected, (state, action) => {
				return state;
			});
	},
});

export const authReducer = authSlice.reducer;
