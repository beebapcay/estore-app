import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountParamList } from './types';
import { AccountScreen } from '../../screens';

const Stack = createStackNavigator<AccountParamList>();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.ACCOUNT} component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
