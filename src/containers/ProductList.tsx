import React from 'react';
import { FlatList } from 'native-base';
import { Product } from '../models';
import { ProductCard } from '../components';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  itemList: Product[];
  onTouchItem: Function;
  style?: StyleProp<ViewStyle>;
}

const ProductList: React.FC<Props> = ({ itemList, onTouchItem, style }) => {
  return (
    <FlatList
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      data={itemList}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({ item }: { item: Product }) => (
        <ProductCard item={item} onTouch={onTouchItem} style={{ width: '50%', padding: 5, marginBottom: 20 }} />
      )}
      keyExtractor={(item: Product) => item.id}
      style={style}
    />
  );
};

export default ProductList;
