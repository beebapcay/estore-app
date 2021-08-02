import React from 'react';
import { Product } from '../models';
import { Text, Box, Image, IconButton, Pressable, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  item: Product;
  onTouch: Function;
  style?: StyleProp<ViewStyle>;
}

const ProductCard: React.FC<Props> = ({ item, onTouch, style }) => {
  return (
    <Pressable onPress={() => onTouch(item)} display="flex" style={style}>
      <Box>
        <Image
          source={{ uri: item.image }}
          alt=" "
          w="100%"
          h="225px"
          resizeMode="cover"
          borderRadius={10}
          borderWidth={0.5}
          borderColor="#00000015"
        />
        <IconButton
          position="absolute"
          borderRadius={999}
          w="35px"
          h="35px"
          icon={<Icon as={Ionicons} name="heart" color="white" size={5} />}
          top={2.5}
          right={2.5}
          bgColor="#00000025"
        />
      </Box>
      <Text noOfLines={2} color="darkText" fontSize={15} bold ellipsizeMode="clip" marginTop={3.5}>
        {item.name}
      </Text>
      <Box flexGrow={1} justifyContent="flex-end">
        <Text isTruncated color="brand.800" fontSize={18} bold marginTop={1.5}>
          {item.price} USD
        </Text>
      </Box>
    </Pressable>
  );
};

export default ProductCard;
