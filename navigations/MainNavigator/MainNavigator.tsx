import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { AccountScreen, HomeScreen, LoveScreen, SearchScreen } from '../../screens';
import { Routes } from '../routes';
import { MainParamsList } from './types';

const Tab = createBottomTabNavigator<MainParamsList>();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.SEARCH} component={SearchScreen} />
      <Tab.Screen name={Routes.LOVE} component={LoveScreen} />
      <Tab.Screen name={Routes.ACCOUNT} component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
