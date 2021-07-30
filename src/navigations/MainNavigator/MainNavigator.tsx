import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainParamList } from './types';
import BottomNavigator from '../BottomNavigator/BottomNavigator';
import { ProductScreen } from '../../screens';

const Stack = createStackNavigator<MainParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.BOTTOM} component={BottomNavigator} />
      <Stack.Screen name={Routes.PRODUCT} component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
