import React, { useState, useEffect } from 'react';
import { VStack, Icon, IconButton, Input, Text } from 'native-base';
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

const QuantityInputCart: React.FC<Props> = ({ start = 0, step = 1, min = 0, max = 100, onChange, style }) => {
  const [quantity, setQuantity] = useState(start);

  const onIncrease = () => {
    if (quantity < max) {
      setQuantity(quantity + step);
      onChange(step);
    }
  };

  const onDecrease = () => {
    if (quantity > min) {
      setQuantity(quantity - step);
      onChange(-step);
    }
  };

  return (
    <VStack alignItems="center" borderRadius={999} style={style} justifyContent="space-between">
      <IconButton
        borderRadius={999}
        border={0.5}
        borderColor="gray.600"
        w="26px"
        h="26px"
        icon={<Icon as={Ionicons} name="remove" color="gray.800" size="22px" />}
        _pressed={{ backgroundColor: '#00000025' }}
        onPress={onDecrease}
      />
      <Input
        color="gray.800"
        fontSize={15}
        padding={0}
        borderWidth={0}
        fontWeight="bold"
        textAlign="center"
        isReadOnly
        value={quantity.toString()}
      />
      <IconButton
        borderRadius={999}
        w="26px"
        h="26px"
        justifyContent="center"
        alignItems="center"
        icon={<Icon as={Ionicons} name="add" color="white" size="22px" />}
        backgroundColor="brand.800"
        _pressed={{ backgroundColor: '#B5390C' }}
        onPress={onIncrease}
      />
    </VStack>
  );
};

export default QuantityInputCart;
