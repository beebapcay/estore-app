import { createSlice } from '@reduxjs/toolkit';
import { UserState, User, Cart } from '../../models';

const initialState: UserState = {
  userData: {} as User,
  cart: {} as Cart,
  error: undefined
};

const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {}
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
