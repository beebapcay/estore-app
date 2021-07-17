import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LovedParamList } from './types';
import { LovedScreen } from '../../screens';

const Stack = createStackNavigator<LovedParamList>();

const LovedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.LOVED} component={LovedScreen} />
    </Stack.Navigator>
  );
};

export default LovedNavigator;
