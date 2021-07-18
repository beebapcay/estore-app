import React from 'react';
import { HStack, IconButton, Input, Icon, Circle } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const SearchBox = (props: any) => {
  return (
    <HStack {...props}>
      <Input placeholder="Search here ..." border={0} />
      <IconButton icon={<Icon as={Ionicons} name="search" color="white" />} bgColor="brand.800" borderRadius={999} />
    </HStack>
  );
};

export default SearchBox;
