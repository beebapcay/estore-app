import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MotivationParamList } from './types';
import { MotivationScreen } from '../../screens';

const Stack = createStackNavigator<MotivationParamList>();

const MotivationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.MOTIVATION} component={MotivationScreen} />
    </Stack.Navigator>
  );
};

export default MotivationNavigator;
