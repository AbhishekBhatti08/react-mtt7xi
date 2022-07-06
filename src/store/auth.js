import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
  posts: [
    { id: 1, title: 'Post 1', isActive: true },
    { id: 2, title: 'Post 2', isActive: true },
    { id: 3, title: 'Post 3', isActive: false },
    { id: 4, title: 'Post 4', isActive: false },
  ],
  filter: 'SHOW_ACTIVE'
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  }}
);

export const authActions = authSlice.actions;

export default authSlice.reducer;
