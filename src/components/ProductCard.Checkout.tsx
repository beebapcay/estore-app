import React from 'react';
import { Box, Text, Image, HStack, IconButton, Icon, Pressable } from 'native-base';
import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProductCart } from '../models';

interface Props {
  item: ProductCart;
  onTouch: Function;
  style?: StyleProp<ViewStyle>;
}

const ProductCardCheckout: React.FC<Props> = ({ item, onTouch, style }) => {
  return (
    <Pressable
      onPress={() => onTouch(item)}
      borderRadius={20}
      bgColor="white"
      paddingY={2.5}
      paddingX={2.5}
      width="300px"
      height="105px"
      style={style}
    >
      <HStack>
        <Box flex={3} borderRadius={10}>
          <Image source={{ uri: item.image }} alt=" " w="100%" h="100%" resizeMode="cover" borderRadius={10} />
        </Box>
        <Box flex={6} justifyContent="center" paddingLeft={5}>
          <Text isTruncated color="darkText" fontSize={15} bold>
            {item.name}
          </Text>

          <Text isTruncated color="brand.800" fontSize={15} bold marginTop={0.5}>
            ${item.price}
          </Text>

          <Text isTruncated color="heading" fontSize={14} italic marginTop={1.5}>
            Items: {item.quantity}
          </Text>
        </Box>
      </HStack>
    </Pressable>
  );
};

export default ProductCardCheckout;
