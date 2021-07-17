import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TrendParamList } from './types';
import { TrendScreen } from '../../screens';

const Stack = createStackNavigator<TrendParamList>();

const TrendNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.TREND} component={TrendScreen} />
    </Stack.Navigator>
  );
};

export default TrendNavigator;
