import { createSlice } from '@reduxjs/toolkit';
import { logIn, register, logOut, refreshUser } from './authOperations';

const handlePending = state => {
  state.authIsLoading = true;
};

const handleRejected = (state, action) => {
  state.authError = action.payload;
  state.authIsLoading = false;
};

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
    [register.pending]: handlePending,
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: handleRejected,

    [logIn.pending]: handlePending,
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authIsLoading = false;
      state.authError = null;
    },
    [logIn.rejected]: handleRejected,

    [logOut.pending]: handlePending,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.authIsLoading = false;
      state.authError = null;
    },
    [logOut.rejected]: handleRejected,

    [refreshUser.pending](state) {
      state.isRefreshing = true;
      state.authIsLoading = false;
    },

    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.authIsLoading = false;
      state.authError = null;
    },

    [refreshUser.rejected](state, action) {
      state.authError = action.payload;
      state.isRefreshing = false;
      state.authIsLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
