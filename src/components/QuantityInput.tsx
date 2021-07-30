import React, { useState, useEffect } from 'react';
import { HStack, Icon, Text, IconButton, Input } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  start?: number;
  step?: number;
  min?: number;
  max?: number;
  onChange: Function;
  style?: StyleProp<ViewStyle>;
}

const QuantityInput: React.FC<Props> = ({ start = 0, step = 1, min = 0, max = 100, onChange, style }) => {
  const [quantity, setQuantity] = useState(start);
  useEffect(() => {
    onChange(quantity);
  }, [quantity]);

  const onIncrease = () => {
    if (quantity < max) setQuantity(quantity + step);
  };

  const onDecrease = () => {
    if (quantity > min) setQuantity(quantity - step);
  };

  return (
    <HStack alignItems="center" border={1} borderColor="gray.400" paddingX={2.5} borderRadius={999} style={style}>
      <IconButton
        borderRadius={999}
        w="35px"
        h="35px"
        icon={<Icon as={Ionicons} name="remove" color="gray.800" size="24px" />}
        _pressed={{ backgroundColor: '#00000025' }}
        onPress={onDecrease}
      />
      <Input
        color="gray.800"
        fontSize={15}
        textAlign="center"
        padding={0}
        borderWidth={0}
        isReadOnly
        marginX={6}
        value={quantity.toString()}
      />
      <IconButton
        borderRadius={999}
        w="35px"
        h="35px"
        icon={<Icon as={Ionicons} name="add" color="gray.800" size="24px" />}
        backgroundColor="transparent"
        _pressed={{ backgroundColor: '#00000025' }}
        onPress={onIncrease}
      />
    </HStack>
  );
};

export default QuantityInput;
