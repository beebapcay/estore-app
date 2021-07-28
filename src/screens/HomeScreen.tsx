import React, { useEffect, useState } from 'react';
import { Box, ScrollView, FlatList } from 'native-base';
import { NBSafeAreaView } from '../components';
import { SearchBox, Header, CategoryCard } from '../components';
import { useAppDispatch } from '../hooks';
import { fetchProductAvailability, shoppingActions } from '../redux/slices';
import { useAppSelector } from '../hooks';
import { Category, Product } from '../models';
import ProductCard from '../components/ProductCard';
import { justifyContent, width } from 'styled-system';
import { LogBox } from 'react-native';

const HomeScreen = () => {
  const { products, categories } = useAppSelector((state) => state.shopping.availability);
  const dispatch = useAppDispatch();

  const [categorySelected, setCategorySelected] = useState<Category>({} as Category);

  useEffect(() => {
    // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    (async () => {
      const result = await dispatch(fetchProductAvailability());
      if (fetchProductAvailability.fulfilled.match(result)) {
        const categories = result.payload?.categories;
        if (categories.length) setCategorySelected(categories[0]);
      }
    })();
  }, []);

  return (
    <NBSafeAreaView flex={1} bgColor="background">
      <Box flex={1} paddingX="5%">
        <SearchBox marginTop={2} w="100%" h="55px" onTouch={() => alert('touch')} onChangeText={() => {}} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header marginTop={5}>Categories</Header>
          <FlatList
            marginTop={5}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({ item }: { item: Category }) => (
              <CategoryCard
                item={item}
                onTouch={(item: Category) => setCategorySelected(item)}
                marginX={2}
                selected={item.id === categorySelected.id}
              />
            )}
            keyExtractor={(item: Category) => item.id}
          />

          <FlatList
            marginTop={8}
            showsVerticalScrollIndicator={false}
            data={products}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }: { item: Product }) => (
              <ProductCard item={item} onTouch={(item: Product) => {}} w="50%" padding={1.5} marginBottom={5} />
            )}
            keyExtractor={(item: Product) => item.id}
          />
        </ScrollView>
      </Box>
    </NBSafeAreaView>
  );
};

export default HomeScreen;
