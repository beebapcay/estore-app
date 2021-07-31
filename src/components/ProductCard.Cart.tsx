import React, { useState, useEffect } from 'react';
import { Box, Text, Image, HStack, IconButton, Icon, Pressable } from 'native-base';
import QuantityInputCart from './QuantityInput.Cart';
import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProductCart } from '../models';

interface Props {
  item: ProductCart;
  onTouch: Function;
  onChangeQuantity: Function;
  style?: StyleProp<ViewStyle>;
}

const CartProductCard: React.FC<Props> = ({ item, onTouch, onChangeQuantity, style }) => {
  const [quantityOffset, setQuantityOffset] = useState(0);
  useEffect(() => {
    onChangeQuantity(item, quantityOffset);
  }, [quantityOffset]);

  return (
    <Pressable
      onPress={() => onTouch(item)}
      borderRadius={20}
      bgColor="white"
      paddingY={3.5}
      w="100%"
      h="115px"
      paddingX={3.5}
      style={style}
    >
      <HStack>
        <Box flex={3.5} bgColor="#00F" borderRadius={10}>
          <Image source={{ uri: item.image }} alt=" " w="100%" h="100%" resizeMode="cover" borderRadius={10} />
        </Box>
        <Box flex={6.5} justifyContent="center" paddingLeft={3.5}>
          <Text noOfLines={2} color="darkText" fontSize={16} bold ellipsizeMode="clip">
            {item.name}
          </Text>

          <Text isTruncated color="brand.800" fontSize={18} bold marginTop={2.5}>
            ${item.price}
          </Text>

          <IconButton
            position="absolute"
            borderRadius={10}
            w="30px"
            h="35px"
            icon={<Icon as={Ionicons} name="ios-trash" color="red.700" size={5} />}
            _pressed={{ backgroundColor: '#00000035' }}
            bottom={0}
            right={0}
            bgColor="#00000015"
            onPress={() => onChangeQuantity(item, -item.quantity)}
          />
        </Box>
        <Box flex={2} alignItems="flex-end">
          <QuantityInputCart
            onChange={(offset: number) => setQuantityOffset(offset)}
            style={{ width: '80%', height: '100%' }}
            start={item.quantity}
            min={1}
            max={10}
          />
        </Box>
      </HStack>
    </Pressable>
  );
};

export default CartProductCard;
