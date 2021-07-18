import React from 'react';
import { Center, Text } from 'native-base';
import { NBSafeAreaView } from '../components';

const ProfileScreen = () => {
  return (
    <NBSafeAreaView flex={1}>
      <Center flex={1}>
        <Text>Profile Screen</Text>
      </Center>
    </NBSafeAreaView>
  );
};

export default ProfileScreen;
