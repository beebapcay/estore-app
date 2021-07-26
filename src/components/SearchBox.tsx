import React from 'react';
import { HStack, IconButton, Input, Icon, Factory, Center } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  onEndEditing?: any | undefined;
  onTouch?: any | undefined;
  autoFocus?: boolean | undefined;
  onChangeText: Function;
}

const SearchBox: React.FC<Props> = ({ onEndEditing, onTouch, autoFocus, onChangeText, ...props }) => {
  return (
    <Center {...props} bgColor="white" borderRadius={15} paddingX={5}>
      <HStack alignItems="center">
        <Input
          placeholder="Search here ..."
          border={0}
          flex={1}
          fontSize={18}
          onTouchStart={onTouch}
          autoFocus={autoFocus}
          onChangeText={(text) => onChangeText(text)}
          onEndEditing={onEndEditing}
        />
        <IconButton
          icon={<Icon as={Ionicons} name="search" color="white" size={5} />}
          bgColor="brand.800"
          borderRadius={999}
          w="35px"
          h="35px"
        />
      </HStack>
    </Center>
  );
};

export default Factory(SearchBox);
