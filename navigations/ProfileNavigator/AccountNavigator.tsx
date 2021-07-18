import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileParamList } from './types';
import { ProfileScreen } from '../../screens';

const Stack = createStackNavigator<ProfileParamList>();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
