import React from 'react';
import { Center, Text } from 'native-base';
import { NBSafeAreaView } from '../components';

const FavouritesScreen = () => {
  return (
    <NBSafeAreaView flex={1} bgColor="background">
      <Center flex={1}>
        <Text>Favourites Screen</Text>
      </Center>
    </NBSafeAreaView>
  );
};
export default FavouritesScreen;
