import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/events/eventSlice';
import userReducer from '../features/users/userSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    event: eventReducer,
    user: userReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
