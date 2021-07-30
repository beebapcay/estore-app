import React, { useEffect, useState } from 'react';
import { Box, Heading, Spinner } from 'native-base';
import { SearchBox, VirtualizedList } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchShoppingData } from '../redux/slices';
import { Category, Product } from '../models';
import Routes from '../navigations/routes';
import { useNavigation } from '@react-navigation/native';
import { CategoryList, ProductList } from '../containers';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const { categories, products } = useAppSelector((state) => state.shoppingState?.shoppingData);

  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  const navigation = useNavigation();

  const [searchKeyword, setSearchKeyword] = useState('');
  useEffect(() => {
    let filterList;
    if (category?.title === 'All') filterList = products;
    else filterList = products?.filter((item) => item?.category === category?.title);
    setFilterProducts(
      filterList?.filter((item) => item?.name.includes(searchKeyword) || item?.category.includes(searchKeyword))
    );
  }, [searchKeyword]);

  const [category, setCategory] = useState<Category>({} as Category);
  useEffect(() => {
    if (category?.title === 'All') setFilterProducts(products);
    else setFilterProducts(products?.filter((item) => item?.category === category?.title));
  }, [category]);

  useEffect(() => {
    (async () => {
      const result = await dispatch(fetchShoppingData());
      if (fetchShoppingData.fulfilled.match(result)) {
        const categories = result.payload?.categories;
        const products = result.payload?.products;

        if (categories.length) setCategory(categories[0]);
        setFilterProducts(products);
      }
    })();
  }, []);

  return (
    <Box flex={1} paddingX="5%" bgColor="background">
      <SearchBox style={{ marginTop: 15, width: '100%', height: 55 }} onTouch={() => {}} onChange={setSearchKeyword} />
      <VirtualizedList showScrollIndicator={false} style={{ marginTop: 25 }}>
        <Box flex={1}>
          {!products && !categories ? (
            <Box flex={1} justifyContent="center">
              <Spinner accessibilityLabel="Loading" color="#cf4614" size={50} />
            </Box>
          ) : (
            <Box>
              <Heading fontSize={20} color="heading">
                Category
              </Heading>

              <CategoryList
                itemList={categories}
                onTouchItem={(item: Category) => setCategory(item)}
                itemSelected={category}
                style={{ marginTop: 15 }}
              />

              <ProductList
                itemList={filterProducts}
                onTouchItem={(item: Product) => navigation.navigate(Routes.PRODUCT, { productId: item.id })}
                style={{ marginTop: 25, flex: 99 }}
              />
            </Box>
          )}
        </Box>
      </VirtualizedList>
    </Box>
  );
};

export default HomeScreen;
