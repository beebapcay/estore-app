import React, { useState } from 'react';
import { FlatList, Box, Heading } from 'native-base';
import { ProductCart } from '../models';
import { ProductCardCart } from '../components';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  itemList: ProductCart[];
  onTouchItem: Function;
  onChangeQuantityItem: Function;
  header?: JSX.Element;
  footer?: JSX.Element;
  style?: StyleProp<ViewStyle>;
}

const ProductListCart: React.FC<Props> = ({ itemList, onTouchItem, onChangeQuantityItem, header, footer, style }) => {
  return (
    <FlatList
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      data={itemList}
      renderItem={({ item }: { item: ProductCart }) => (
        <ProductCardCart
          item={item}
          onChangeQuantity={onChangeQuantityItem}
          onTouch={onTouchItem}
          style={{ width: '100%', marginBottom: 20 }}
        />
      )}
      keyExtractor={(item: ProductCart, index) => `${item.id} ${index}`}
      ListEmptyComponent={
        <Heading fontSize={18} color="gray.500" textAlign="center" bold marginTop="50%">
          Your Cart Is Empty
        </Heading>
      }
      ListFooterComponent={footer}
      ListHeaderComponent={header}
      style={style}
    />
  );
};

export default ProductListCart;
