import React from 'react';
import Routes from '../routes';
import { createStackNavigator } from '@react-navigation/stack';
import { AppParamList } from './types';
import MainNavigator from '../BottomNavigator/BottomNavigator';
import AuthNavigator from '../AuthNavigator/AuthNavigator';

const Stack = createStackNavigator<AppParamList>();

const AppNavigator = (props: any) => {
  return (
    <Stack.Navigator {...props} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Routes.AUTH} component={AuthNavigator} />
      <Stack.Screen name={Routes.MAIN} component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
