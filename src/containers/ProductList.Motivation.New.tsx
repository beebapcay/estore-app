import React from 'react';
import { Box, FlatList, Heading } from 'native-base';
import { Product } from '../models';
import { ProductCardMotivationNew } from '../components';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  itemList: Product[];
  onTouchItem: Function;
  header?: JSX.Element;
  footer?: JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const ProductListMotivationNew: React.FC<Props> = ({ itemList, onTouchItem, header, footer, style }) => {
  return (
    <FlatList
      nestedScrollEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={itemList}
      renderItem={({ item }: { item: Product }) => (
        <ProductCardMotivationNew item={item} onTouch={onTouchItem} style={{ marginRight: 35 }} />
      )}
      keyExtractor={(item: Product, index) => `${item.id} ${index}`}
      ListEmptyComponent={
        <Heading fontSize={18} color="gray.500" textAlign="center" bold>
          Motivation Is Empty
        </Heading>
      }
      ListFooterComponent={footer}
      ListHeaderComponent={header}
      style={style}
    />
  );
};

export default ProductListMotivationNew;
