import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainParamList } from './types';
import MainNavigator from '../BottomNavigator/BottomNavigator';

const Stack = createStackNavigator<MainParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.MAIN} component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
