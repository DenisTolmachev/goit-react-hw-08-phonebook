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
      return toast.error(error);
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async user => {
  try {
    const data = await API.login(user);
    API.token.set(data.token);
    return data;
  } catch (error) {
    return toast.error(error);
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await API.logout();
    API.token.unset();
  } catch (error) {
    return toast.error(error);
  }
});
