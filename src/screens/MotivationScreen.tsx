import React, { useState, useEffect } from 'react';
import { Center, Text, Box, Spinner, Heading, ScrollView } from 'native-base';
import { useAppSelector } from '../hooks';
import { useNavigation } from '@react-navigation/native';
import { ProductListMotivationNew, ProductListMotivationBestSeller, ProductListMotivationTrend } from '../containers';
import { Product } from '../models';
import Routes from '../navigations/routes';

const MotivationScreen = () => {
  const { products, motivations } = useAppSelector((state) => state.shoppingState.shoppingData);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [bestSeller, setBestSeller] = useState<Product[]>([]);
  const [trend, setTrend] = useState<Product[]>([]);

  useEffect(() => {
    setNewArrivals(products?.filter((item) => item.motivations.includes('New Arrivals')));
    setBestSeller(products?.filter((item) => item.motivations.includes('Best Seller')));
    setTrend(products?.filter((item) => item.motivations.includes('Trending')));
  }, [products, motivations]);

  const navigation = useNavigation();

  return (
    <Box flex={1} bgColor="background" paddingX="5%">
      {!products && !motivations ? (
        <Center flex={1}>
          <Spinner accessibilityLabel="Loading" color="#cf4614" size={50} />
        </Center>
      ) : (
        <ScrollView marginTop={2.5} showsVerticalScrollIndicator={false}>
          <Box>
            <Heading fontSize={20} color="heading">
              New Arrivals
            </Heading>

            <ProductListMotivationNew
              itemList={newArrivals}
              onTouchItem={(item: Product) => navigation.navigate(Routes.PRODUCT, { productId: item.id })}
              style={{ marginTop: 12.5 }}
            />
          </Box>

          <Box marginTop={12}>
            <Heading fontSize={20} color="heading">
              Best Seller
            </Heading>

            <ProductListMotivationBestSeller
              itemList={bestSeller}
              onTouchItem={(item: Product) => navigation.navigate(Routes.PRODUCT, { productId: item.id })}
              style={{ marginTop: 12.5 }}
            />
          </Box>

          <Box marginTop={12} marginBottom="50px">
            <Heading fontSize={20} color="heading">
              Trending
            </Heading>

            <ProductListMotivationTrend
              itemList={trend}
              onTouchItem={(item: Product) => navigation.navigate(Routes.PRODUCT, { productId: item.id })}
              style={{ marginTop: 12.5 }}
            />
          </Box>
        </ScrollView>
      )}
    </Box>
  );
};

export default MotivationScreen;
