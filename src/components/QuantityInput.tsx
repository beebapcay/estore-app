import React from 'react';
import { HStack, Icon, Text, IconButton } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  onChange: Function;
  style?: StyleProp<ViewStyle>;
}

const QuantityInput: React.FC<Props> = ({ onChange, style }) => {
  return (
    <HStack alignItems="center" style={style}>
      <IconButton
        borderRadius={999}
        w="35px"
        h="35px"
        icon={<Icon as={Ionicons} name="remove" color="black" size={7} />}
        border={1}
        borderColor="black"
        backgroundColor="transparent"
        _pressed={{ backgroundColor: '#00000010' }}
      />
      <Text color="black" fontSize={18} marginX={6}>
        1
      </Text>
      <IconButton
        borderRadius={999}
        w="35px"
        h="35px"
        icon={<Icon as={Ionicons} name="add" color="black" size={7} />}
        border={1}
        borderColor="black"
        backgroundColor="transparent"
        _pressed={{ backgroundColor: '#00000010' }}
      />
    </HStack>
  );
};

export default QuantityInput;
