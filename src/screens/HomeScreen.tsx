import React, { useEffect, useState } from 'react';
import { Box, ScrollView, FlatList } from 'native-base';
import { NBSafeAreaView } from '../components';
import { SearchBox, Header, CategoryCard } from '../components';
import { useAppDispatch } from '../hooks';
import { fetchProductAvailability } from '../redux/slices';
import { useAppSelector } from '../hooks';
import { Category } from '../models';

const HomeScreen = () => {
  const { products, categories, motivations } = useAppSelector((state) => state.shopping.availability);
  const dispatch = useAppDispatch();

  const [categorySelected, setCategorySelected] = useState<Category | undefined>(undefined);

  useEffect(() => {
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
        <Header marginTop={5}>Categories</Header>
        <ScrollView>
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
                selected={item.id === categorySelected?.id}
              />
            )}
            keyExtractor={(item: Category) => {
              console.log(item.id);
              return item.id;
            }}
          />
        </ScrollView>
      </Box>
    </NBSafeAreaView>
  );
};

export default HomeScreen;
