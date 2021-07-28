import React, { useState } from 'react';
import { Center, Factory, Text, Pressable } from 'native-base';
import { Category } from '../models';

interface Props {
  item: Category;
  onTouch: Function;
  selected: boolean;
}

const CategoryCard: React.FC<Props> = ({ item, onTouch, selected, ...props }) => {
  return (
    <Pressable
      paddingX={7}
      paddingY={1.5}
      bgColor={selected ? 'brand.500' : 'gray.200'}
      borderRadius={15}
      onPress={() => {
        onTouch(item);
      }}
      {...props}
    >
      <Center>
        <Text color={selected ? 'white' : 'gray.500'}>{item.title}</Text>
      </Center>
    </Pressable>
  );
};

export default Factory(CategoryCard);
