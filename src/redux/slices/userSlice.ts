import { createSlice } from '@reduxjs/toolkit';
import { UserState, User } from '../../models';

const initialState: UserState = {
  user: {} as User,
  error: undefined
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
