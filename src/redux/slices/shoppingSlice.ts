import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ShoppingState, ProductAvailability } from '../../models';
import { sstoreApi } from '../../api';

const initialState: ShoppingState = {
  availability: {} as ProductAvailability
};

const fetchProductAvailability = createAsyncThunk('shopping/fetchProductAvailability', async () => {
  const response = await sstoreApi.fetchProductAvailability();
  return response.data;
});

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductAvailability.fulfilled, (state, actions) => {
      state.availability = actions.payload;
    });
  }
});

export const shoppingActions = shoppingSlice.actions;

export default shoppingSlice.reducer;
