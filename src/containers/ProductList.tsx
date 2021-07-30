import React from 'react';
import { FlatList, Box, Heading } from 'native-base';
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
      keyExtractor={(item: Product, index) => `${item.id} ${index}`}
      ListEmptyComponent={
        <Heading fontSize={18} color="#6E6D7A" textAlign="center" bold marginTop="80px">
          No Products Found
        </Heading>
      }
      style={style}
    />
  );
};

export default ProductList;
