import React from 'react';
import { Box, FlatList, Heading } from 'native-base';
import { ProductCart } from '../models';
import { ProductCardCheckout } from '../components';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  itemList: ProductCart[];
  onTouchItem: Function;
  header?: JSX.Element;
  footer?: JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const ProductListCheckout: React.FC<Props> = ({ itemList, onTouchItem, header, footer, style }) => {
  return (
    <FlatList
      nestedScrollEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={itemList}
      renderItem={({ item }: { item: ProductCart }) => (
        <ProductCardCheckout item={item} onTouch={onTouchItem} style={{ marginRight: 20 }} />
      )}
      keyExtractor={(item: ProductCart, index) => `${item.id} ${index}`}
      ListEmptyComponent={
        <Heading fontSize={18} color="gray.500" textAlign="center" bold>
          Your Cart Is Empty
        </Heading>
      }
      ListFooterComponent={footer}
      ListHeaderComponent={header}
      style={style}
    />
  );
};

export default ProductListCheckout;
