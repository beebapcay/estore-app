import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User, Cart, Product } from '../../models';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: UserState = {
  userData: {} as User,
  cart: { items: [], subTotalCost: 0, shipCost: 2.5, totalCost: 0 } as Cart,
  error: undefined
};

export const loadCartData = createAsyncThunk('userState/loadCartData', async () => {
  try {
    const cartStr = await AsyncStorage.getItem('@cart');
    if (cartStr !== null) {
      const cart = JSON.parse(cartStr) as Cart;
      return cart;
    }
    return { items: [], subTotalCost: 0, shipCost: 0, totalCost: 0 } as Cart;
  } catch (error) {
    return { items: [], subTotalCost: 0, shipCost: 0, totalCost: 0 } as Cart;
    console.log('Loading Cart Error');
  }
});

const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    updateProductToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.cart.items.find((item) => item.id === product.id);
      if (existingProduct) {
        state.cart.items = state.cart.items.map((item) =>
          item.id === product.id ? { ...product, quantity: item.quantity + quantity } : item
        );
        state.cart.items = state.cart.items.filter((item) => item.quantity > 0);
      } else {
        state.cart.items.push({ ...product, quantity: quantity });
      }
      state.cart.subTotalCost += quantity * product.price;
      state.cart.totalCost = state.cart.subTotalCost + state.cart.shipCost;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadCartData.fulfilled, (state, action) => {
      state.cart = action.payload;
      console.log(state.cart);
    });
  }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
