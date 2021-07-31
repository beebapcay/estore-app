import React, { useEffect } from 'react';
import { Center, Text, Box, Spinner, HStack, Heading, Button, Icon } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector, useAppDispatch } from '../hooks';
import { ProductListCart } from '../containers';
import { Product, ProductCart } from '../models';
import Routes from '../navigations/routes';
import { Ionicons } from '@expo/vector-icons';
import { userActions } from '../redux/slices';

const CartScreen = () => {
  const cart = useAppSelector((state) => state.userState.cart);

  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem('@cart', JSON.stringify(cart));
      } catch (error) {
        console.log('Save Cart Error');
      }
    })();
  }, [cart]);

  // useFocusEffect(() => {
  //   (async () => {
  //     await dispatch(loadCartData());
  //   })();
  // });

  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  return (
    <Box flex={1} background="background" paddingX="5%">
      {JSON.stringify(cart) === JSON.stringify({}) ? (
        <Center flex={1}>
          <Spinner accessibilityLabel="Loading" color="#cf4614" size={50} />
        </Center>
      ) : (
        <>
          <ProductListCart
            itemList={cart.items}
            onChangeQuantityItem={(item: ProductCart, quantity: number) =>
              dispatch(userActions.updateProductToCart({ product: item, quantity: quantity }))
            }
            onTouchItem={(item: Product) => navigation.navigate(Routes.PRODUCT, { productId: item.id })}
            style={{ marginTop: 15, flex: 1 }}
          />

          <Box marginBottom={8} marginTop={1.5}>
            <HStack alignItems="center" justifyContent="space-evenly">
              <HStack alignItems="center">
                <Text color="gray.600" fontSize={19} bold>
                  Subtotal:
                </Text>
                <Text color="#363B64" fontSize={18} bold marginLeft={2}>
                  ${cart.subTotalCost}
                </Text>
              </HStack>

              <HStack alignItems="center">
                <Text color="gray.600" fontSize={19} bold>
                  Shipping:
                </Text>
                <Text color="#363B64" fontSize={18} bold marginLeft={2}>
                  ${cart.shipCost}
                </Text>
              </HStack>
            </HStack>

            <HStack
              marginTop={2.5}
              bgColor="white"
              borderRadius={20}
              paddingY={3.5}
              paddingX={5}
              alignItems="center"
              justifyContent="space-around"
              space={5}
            >
              <HStack alignItems="flex-start" flex={7}>
                <Text color="heading" fontSize={16} bold>
                  $
                </Text>
                <Heading color="heading" fontSize={30} bold marginLeft={1.5} isTruncated ellipsizeMode="clip">
                  {cart.totalCost}
                </Heading>
              </HStack>

              <Button
                flex={5}
                h="45px"
                paddingX={8}
                borderRadius={999}
                bgColor="#363B64"
                _text={{ fontWeight: 'bold', fontSize: 18 }}
                alignSelf="center"
                startIcon={<Icon as={Ionicons} name="ios-exit-outline" size={7} marginLeft={1.5} />}
                _pressed={{ backgroundColor: '#2e3254' }}
              >
                Check Out
              </Button>
            </HStack>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartScreen;
