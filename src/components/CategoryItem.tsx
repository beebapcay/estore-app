import React, { useState } from 'react';
import { Center, Factory, Text, Pressable } from 'native-base';

const CategoryItem: React.FC = ({ children }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => setSelected(!selected);

  return (
    <Pressable
      paddingX={7}
      paddingY={1.5}
      bgColor={selected ? 'brand.500' : 'gray.200'}
      borderRadius={15}
      onPress={toggleSelected}
    >
      <Center>
        <Text color={selected ? 'white' : 'gray.500'}>{children}</Text>
      </Center>
    </Pressable>
  );
};

export default Factory(CategoryItem);
