import React from 'react';
import { FlatList, Text } from 'native-base';
import { Category } from '../models';
import { CategoryCard } from '../components';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  itemList: Category[];
  onTouchItem: Function;
  itemSelected: Category;
  header?: JSX.Element;
  footer?: JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const CategoryList: React.FC<Props> = ({ itemList, onTouchItem, itemSelected, header, footer, style }) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={itemList}
      renderItem={({ item }: { item: Category }) => (
        <CategoryCard
          style={{ marginRight: 20 }}
          item={item}
          onTouch={onTouchItem}
          isSelected={item?.id === itemSelected?.id}
        />
      )}
      keyExtractor={(item: Category, index) => {
        return `${item.id} ${index}`;
      }}
      ListHeaderComponent={header}
      ListFooterComponent={footer}
      style={style}
    />
  );
};

export default CategoryList;
