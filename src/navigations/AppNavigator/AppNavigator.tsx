import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppParamList } from './types';
import MainNavigator from '../MainNavigator/MainNavigator';

const Stack = createStackNavigator<AppParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.MAIN} component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
