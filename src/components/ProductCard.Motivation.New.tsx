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

const ProductCardMotivationNew: React.FC<Props> = ({ item, onTouch, style }) => {
  return (
    <Pressable
      display="flex"
      width="250px"
      height="200px"
      borderRadius={15}
      onPress={() => onTouch(item)}
      padding={3.5}
      bgColor="white"
      style={style}
    >
      <Box h="100px" w="100%" borderRadius={10}>
        <Image source={{ uri: item.image }} alt=" " w="100%" h="100%" resizeMode="cover" borderRadius={10} />

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

      <Box flexGrow={1} justifyContent="flex-end" marginTop={1.5}>
        <Text isTruncated color="darkText" fontSize={15} bold>
          {item.name}
        </Text>
        <Text isTruncated color="brand.800" fontSize={18} bold ellipsizeMode="clip" marginTop={0.5}>
          {item.price} USD
        </Text>
      </Box>

      <Box position="absolute" bottom={2.5} right={2.5} paddingX={5} paddingY={1} bgColor="#B00020" borderRadius={10}>
        <Text fontSize={14} bold color="white">
          New
        </Text>
      </Box>
    </Pressable>
  );
};

export default ProductCardMotivationNew;
