import { configureStore } from '@reduxjs/toolkit';
import { shoppingReducer, userReducer } from './slices';

export const store = configureStore({
  reducer: {
    shoppingState: shoppingReducer,
    userState: userReducer
  }
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
