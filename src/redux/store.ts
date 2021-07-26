import { configureStore } from '@reduxjs/toolkit';
import { shoppingReducer, userReducer } from './slices';

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    user: userReducer
  }
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
