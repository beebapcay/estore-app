import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartParamList } from './types';
import { CartScreen } from '../../screens';
import { useHeader } from '../../hooks';

const Stack = createStackNavigator<CartParamList>();

const CartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={useHeader('Shopping Cart')}>
      <Stack.Screen name={Routes.CART} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
