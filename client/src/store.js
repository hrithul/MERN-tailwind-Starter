import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import errorReducer from './features/errors/errorSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    errors: errorReducer,
  },
});

export default store;