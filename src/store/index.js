import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: { auth: authReducer, count: counterReducer },
});

export default store;
