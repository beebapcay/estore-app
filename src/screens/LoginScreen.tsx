import React from 'react';
import { Center, Text } from 'native-base';
import { NBSafeAreaView } from '../components';

const LoginScreen = () => {
  return (
    <NBSafeAreaView flex={1}>
      <Center flex={1}>
        <Text>Login Screen</Text>
      </Center>
    </NBSafeAreaView>
  );
};

export default LoginScreen;
