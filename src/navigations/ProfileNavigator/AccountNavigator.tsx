import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileParamList } from './types';
import { ProfileScreen } from '../../screens';
import { useHeader } from '../../hooks';

const Stack = createStackNavigator<ProfileParamList>();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={useHeader('Profile')}>
      <Stack.Screen name={Routes.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
