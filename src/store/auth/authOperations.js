import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/usersAPI';
import { toast } from 'react-toastify';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async user => {
    try {
      const data = await API.register(user);
      API.token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`Please try to use other details. ${error.message}`);
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async user => {
  try {
    const data = await API.login(user);
    API.token.set(data.token);
    return data;
  } catch (error) {
    toast.error(`Please try to use other details. ${error.message}`);
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await API.logout();
    API.token.unset();
  } catch (error) {
    toast.error(`Please try to use other details. ${error.message}`);
  }
});

export const getUserData = createAsyncThunk(
  'auth/userData',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    API.token.set(persistedToken);
    try {
      const data = await API.userData();
      return data;
    } catch (error) {
      // toast.error(`Please try to use other details. ${error.message}`);
    }
  }
);
