import React from 'react';
import { FlatList } from 'native-base';
import { Category } from '../models';
import { CategoryCard } from '../components';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  itemList: Category[];
  onTouchItem: Function;
  itemSelected: Category;
  style?: StyleProp<ViewStyle>;
}

const CategoryList: React.FC<Props> = ({ itemList, onTouchItem, itemSelected, style }) => {
  return (
    <FlatList
      maintainVisibleContentPosition={{
        minIndexForVisible: 0
      }}
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
      keyExtractor={(item: Category) => item.id}
      style={style}
    />
  );
};

export default CategoryList;
