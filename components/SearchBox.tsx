import React from 'react';
import { HStack, IconButton, Input, Icon, Box, Factory } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const SearchBox = (props: any) => {
  return (
    <Box bgColor="white" borderRadius={15} {...props} paddingX={5} paddingY={0.8}>
      <HStack alignItems="center">
        <Input placeholder="Search here ..." border={0} flex={1} fontSize={18} />
        <IconButton
          icon={<Icon as={Ionicons} name="search" color="white" size={5} />}
          bgColor="brand.800"
          borderRadius={999}
          w={8}
          h={8}
        />
      </HStack>
    </Box>
  );
};

export default Factory(SearchBox);
