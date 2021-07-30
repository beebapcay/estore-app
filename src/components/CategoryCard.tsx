import React from 'react';
import { Center, Text, Pressable } from 'native-base';
import { Category } from '../models';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  item: Category;
  onTouch: Function;
  isSelected: boolean;
  style?: StyleProp<ViewStyle>;
}

const CategoryCard: React.FC<Props> = ({ item, onTouch, isSelected, style }) => {
  return (
    <Pressable
      paddingX={7}
      paddingY={1.5}
      bgColor={isSelected ? 'brand.800' : 'gray.200'}
      borderRadius={15}
      onPress={() => onTouch(item)}
      style={style}
    >
      <Center>
        <Text color={isSelected ? 'white' : 'gray.500'}>{item.title}</Text>
      </Center>
    </Pressable>
  );
};

export default CategoryCard;
