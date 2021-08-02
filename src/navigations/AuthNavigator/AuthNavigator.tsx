import React from 'react';
import Routes from '../routes';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '../../screens';
import { AuthParamList } from './types';
import { useHeader } from '../../hooks';

const Stack = createStackNavigator<AuthParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} options={useHeader('Login')} />
      <Stack.Screen name={Routes.REGISTER} component={RegisterScreen} options={useHeader('Register')} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
