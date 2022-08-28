import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserData,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [getUserData.pending]: state => {
      state.isRefreshing = true;
      state.isLoggedIn = false;
    },
    [getUserData.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.isRefreshing = false;
      state.isLoggedIn = true;
    },
    [getUserData.rejected]: state => {
      state.isRefreshing = false;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
