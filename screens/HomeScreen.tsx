import React from 'react';
import { Box, Text } from 'native-base';
import { NBSafeAreaView } from '../components';

const HomeScreen = () => {
  return (
    <NBSafeAreaView bgColor="background" flex={1}>
      <Box>
        <Text>Home Screen</Text>
      </Box>
    </NBSafeAreaView>
  );
};

export default HomeScreen;
