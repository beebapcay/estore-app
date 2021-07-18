import React from 'react';
import { Center, Text } from 'native-base';
import { NBSafeAreaView } from '../components';

const HomeScreen = () => {
  return (
    <NBSafeAreaView flex={1}>
      <Center flex={1}>
        <Text>Home Screen</Text>
      </Center>
    </NBSafeAreaView>
  );
};

export default HomeScreen;
