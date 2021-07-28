import React from 'react';
import { Box, Pressable } from 'native-base';
import { Product } from '../models';

interface Props {
  item: Product;
  onTouch: Function;
}

const ProductCard: React.FC<Props> = ({ item, onTouch, ...props }) => {
  return <Pressable></Pressable>;
};

export default ProductCard;
