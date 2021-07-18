import React from 'react';
import { Box } from 'native-base';
import { NBSafeAreaView } from '../components';
import { SearchBox, Header } from '../components';

const HomeScreen = () => {
  return (
    <NBSafeAreaView flex={1} bgColor="background">
      <Box flex={1} paddingX="5%">
        <SearchBox alignSelf="center" marginTop={2} w="100%" />
        <Header marginTop={5}>Categories</Header>
      </Box>
    </NBSafeAreaView>
  );
};

export default HomeScreen;
