import React from 'react';
import { HStack, IconButton, Input, Icon, Center } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  onEndEditing?: any | undefined;
  onTouch?: any | undefined;
  autoFocus?: boolean | undefined;
  onChange: Function;
  style?: StyleProp<ViewStyle>;
}

const SearchBox: React.FC<Props> = ({ onEndEditing, onTouch, autoFocus, onChange, style }) => {
  return (
    <Center bgColor="white" borderRadius={15} paddingX={5} style={style}>
      <HStack alignItems="center">
        <Input
          placeholder="Search here ..."
          border={0}
          flex={1}
          fontSize={18}
          onTouchStart={onTouch}
          autoFocus={autoFocus}
          onChangeText={(text) => onChange(text)}
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

export default SearchBox;
