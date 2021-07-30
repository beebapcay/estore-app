import React, { useEffect, useState } from 'react';
import { Box, Factory, ScrollView, FlatList, Text, Heading } from 'native-base';
import { SearchBox, VirtualizedList } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchProductAvailability } from '../redux/slices';
import { Category, Product } from '../models';
import Routes from '../navigations/routes';
import { useNavigation } from '@react-navigation/native';
import { CategoryList, ProductList } from '../containers';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const { products, categories } = useAppSelector((state) => state.shopping.availability);

  const navigation = useNavigation();

  const [category, setCategory] = useState<Category>({} as Category);

  useEffect(() => {
    (async () => {
      const result = await dispatch(fetchProductAvailability());
      if (fetchProductAvailability.fulfilled.match(result)) {
        const categories = result.payload?.categories;
        if (categories.length) setCategory(categories[0]);
      }
    })();
  }, []);

  return (
    <Box flex={1} paddingX="5%" bgColor="background">
      <SearchBox style={{ marginTop: 15, width: '100%', height: 55 }} onTouch={() => {}} onChange={() => {}} />
      <VirtualizedList showScrollIndicator={false} style={{ marginTop: 25 }}>
        <Heading fontSize={20} color="heading" bold>
          Category
        </Heading>
        <CategoryList
          itemList={categories}
          onTouchItem={(item: Category) => setCategory(item)}
          itemSelected={category}
          style={{ marginTop: 15 }}
        />
        <ProductList
          itemList={products}
          onTouchItem={(item: Product) => navigation.navigate(Routes.PRODUCT, { productId: item.id })}
          style={{ marginTop: 20 }}
        />
      </VirtualizedList>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
          <Header marginTop={5} title="Categories" />
          <CategoryList marginTop={5} onTouch={(item: Category) => setCategory(item)} itemSelected={category} />
          <ProductList
            marginTop={5}
            onTouch={(item: Product) => navigation.navigate(Routes.PRODUCT, { productId: item.id })}
          />
        </ScrollView> */}
    </Box>
  );
};

export default HomeScreen;
