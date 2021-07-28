import React from 'react';
import { Product } from '../models';
import { Text, VStack, Box, Factory, Image, IconButton, Pressable, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  item: Product;
  onTouch: Function;
}

const ProductCard: React.FC<Props> = ({ item, onTouch, ...props }) => {
  return (
    <Pressable {...props} onPress={() => onTouch(item)} display="flex">
      <Box borderRadius={10} shadow={2}>
        <Image source={{ uri: item.image }} alt=" " w="100%" h="225px" resizeMode="cover" borderRadius={10} />
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

      <Box h="65px">
        <Text noOfLines={2} color="darkText" fontSize={16.5} bold marginTop={3.5}>
          {item.name}
        </Text>
      </Box>
      <Text isTruncated color="brand.800" fontSize={16} bold marginTop={1.5}>
        {item.price} USD
      </Text>
    </Pressable>
  );
};

export default Factory(ProductCard);
