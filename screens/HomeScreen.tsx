import React from 'react';
import { Box, Text } from 'native-base';
import { NBSafeAreaView } from '../components';
import { NBFocusAwareStatusBar } from '../components';
import { useToken } from 'native-base';

const HomeScreen = () => {
  const [primary] = useToken('colors', ['primary']);

  return (
    <NBSafeAreaView flex={1}>
      <NBFocusAwareStatusBar barStyle="light-content" backgroundColor={primary['500']} />
      <Box flex={0.15} bgColor="primary.500" marginBottom={-10}></Box>
      <Box flex={0.85} bgColor="background" borderTopRadius={30}></Box>
    </NBSafeAreaView>
  );
};

export default HomeScreen;
