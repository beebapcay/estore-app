import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ShoppingState, Shopping } from '../../models';
import { sstoreApi } from '../../api';

const initialState: ShoppingState = {
  shoppingData: {} as Shopping,
  error: undefined
};

export const fetchShoppingData = createAsyncThunk('shoppingState/fetchShoppingData', async () => {
  const response = await sstoreApi.fetchShoppingData();
  return response.data;
});

const shoppingSlice = createSlice({
  name: 'shoppingState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShoppingData.fulfilled, (state, actions) => {
      const shoppingData = actions.payload;
      shoppingData.categories.sort((a, b) => a.order - b.order);
      shoppingData.products.sort((a, b) => a.date - b.date);
      state.shoppingData = shoppingData;
    });
  }
});

export const shoppingActions = shoppingSlice.actions;

export default shoppingSlice.reducer;
