import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refreshUser, register } from './operations';
import { authInitialState } from './initialState';

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	extraReducers: builder => {
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload.user;
				state.token = action.payload.token;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.user = { name: null, email: null };
				state.token = '';
			})
			.addCase(refreshUser.fulfilled, (state, action) => {
				state.user = action.payload;
			});
	},
});

export const authReducer = authSlice.reducer;
