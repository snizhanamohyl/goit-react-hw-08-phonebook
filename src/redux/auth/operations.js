import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
	axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
	try {
		const response = await axios.post('/users/signup', credentials);
		setAuthHeader(response.data.token);
		return response.data;
	} catch (error) {
		Notify.failure('Registration Error');
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
	try {
		const response = await axios.post('/users/login', credentials);
		setAuthHeader(response.data.token);
		return response.data;
	} catch (error) {
		Notify.failure('Login Error');
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		const response = await axios.post('/users/logout');
		clearAuthHeader();
		return response.data;
	} catch (error) {
		Notify.failure('Logout Error');
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
	const { token } = thunkAPI.getState().auth;
	if (!token) return thunkAPI.rejectWithValue('No valid token');
	setAuthHeader(token);
	try {
		const response = await axios.get('/users/current');
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
