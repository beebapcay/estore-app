import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartParamList } from './types';
import { CartScreen } from '../../screens';
import { useHeader } from '../../hooks';
import { CheckoutScreen } from '../../screens';

const Stack = createStackNavigator<CartParamList>();

const CartNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.CART}>
      <Stack.Screen name={Routes.CART} component={CartScreen} options={useHeader('Shopping Cart')} />
      <Stack.Screen name={Routes.CHECKOUT} component={CheckoutScreen} options={useHeader('Checkout')} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
