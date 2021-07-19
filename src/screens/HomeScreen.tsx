import React from 'react';
import { Box, HStack } from 'native-base';
import { NBSafeAreaView } from '../components';
import { SearchBox, Header, CategoryItem } from '../components';

const HomeScreen = () => {
  return (
    <NBSafeAreaView flex={1} bgColor="background">
      <Box flex={1} paddingX="5%">
        <SearchBox alignSelf="center" marginTop={2} w="100%" />
        <Header marginTop={5}>Categories</Header>
        <HStack marginTop={5}>
          <CategoryItem>All</CategoryItem>
        </HStack>
      </Box>
    </NBSafeAreaView>
  );
};

export default HomeScreen;
