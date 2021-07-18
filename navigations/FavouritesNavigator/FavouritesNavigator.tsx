import Routes from '../routes';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FavouritesParamList } from './types';
import { FavouritesScreen } from '../../screens';

const Stack = createStackNavigator<FavouritesParamList>();

const FavouritesNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.FAVOURITES} component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

export default FavouritesNavigator;
