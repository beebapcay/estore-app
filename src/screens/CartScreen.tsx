import React from 'react';
import { Center, Text } from 'native-base';
import { NBSafeAreaView } from '../components';

const CartScreen = () => {
  return (
    <NBSafeAreaView flex={1} bgColor="background">
      <Center flex={1}>
        <Text>Cart Screen</Text>
      </Center>
    </NBSafeAreaView>
  );
};

export default CartScreen;
