import React from 'react';
import { Center, Text, IconButton, Box, ScrollView, Icon, Image, HStack, Button } from 'native-base';
import { NBSafeAreaView } from '../components';
import { useAppSelector } from '../hooks';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ProductScreenRouteProp } from '../navigations/MainNavigator/types';
import { Ionicons } from '@expo/vector-icons';
import Routes from '../navigations/routes';

const ProductScreen = () => {
  const route = useRoute<ProductScreenRouteProp>();
  const products = useAppSelector((state) => state.shopping.availability.products);
  const product = products.find((item) => item.id === route.params.productId);

  const navigation = useNavigation();

  return (
    <NBSafeAreaView flex={1}>
      <ScrollView showsVerticalScrollIndicator={false} flex={1}>
        <HStack marginTop={5} marginX={3} justifyContent="space-between" alignItems="center">
          <IconButton
            borderRadius={999}
            w="45px"
            h="45px"
            icon={<Icon as={Ionicons} name="chevron-back" color="black" size={8} />}
            bgColor="transparent"
            _pressed={{ backgroundColor: '#00000025' }}
            onPress={() => navigation.goBack()}
          />

          <IconButton
            borderRadius={999}
            w="45px"
            h="45px"
            icon={<Icon as={Ionicons} name="md-cart" color="black" size={7} />}
            bgColor="transparent"
            _pressed={{ backgroundColor: '#00000025' }}
            onPress={() => navigation.navigate(Routes.CART)}
          />
        </HStack>

        <Box marginX={5} marginTop={2.5}>
          <Box>
            <Text color="brand.800" fontSize={18}>
              {product?.category}
            </Text>
            <Text color="#0E010A" bold fontSize={22} marginTop={3}>
              {product?.name}
            </Text>
            <HStack space={3}>
              {product?.motivations.map((item) => (
                <Text color="#6E6D7A" marginTop={1.5} fontSize={16} key={item}>
                  {item}
                </Text>
              ))}
            </HStack>
          </Box>

          <Box marginY={4} borderRadius={10} shadow={2}>
            <Image source={{ uri: product?.image }} w="100%" h="350px" alt=" " borderRadius={10} />
            <IconButton
              position="absolute"
              borderRadius={999}
              w="40px"
              h="40px"
              icon={<Icon as={Ionicons} name="heart" color="white" size={6} />}
              top={3.5}
              right={3.5}
              bgColor="#00000025"
            />
          </Box>

          <HStack justifyContent="space-between" marginY={2}>
            <HStack alignItems="center">
              <IconButton
                borderRadius={999}
                w="35px"
                h="35px"
                icon={<Icon as={Ionicons} name="remove" color="black" size={7} />}
                border={1}
                borderColor="black"
                backgroundColor="transparent"
                _pressed={{ backgroundColor: '#00000010' }}
              />
              <Text color="black" fontSize={18} marginX={6}>
                1
              </Text>
              <IconButton
                borderRadius={999}
                w="35px"
                h="35px"
                icon={<Icon as={Ionicons} name="add" color="black" size={7} />}
                border={1}
                borderColor="black"
                backgroundColor="transparent"
                _pressed={{ backgroundColor: '#00000010' }}
              />
            </HStack>

            <Center bgColor="brand.800" paddingY={2} marginLeft={10} borderRadius={10} paddingX={10}>
              <Text color="white" fontSize={20} bold>
                {product?.price} USD
              </Text>
            </Center>
          </HStack>

          <Box marginTop={3} marginBottom="75px">
            <Text fontSize={20} color="#0E010A" bold>
              Description
            </Text>
            <Text color="#6E6D7A" marginTop={1.5} fontSize={17}>
              {product?.description}
            </Text>
          </Box>
        </Box>
      </ScrollView>
      <Button
        w="85%"
        position="absolute"
        bottom={0}
        marginTop={1.5}
        borderRadius={999}
        bgColor="#363B64"
        _text={{ fontWeight: 'bold', fontSize: 18 }}
        alignSelf="center"
      >
        Add To Cart
      </Button>
    </NBSafeAreaView>
  );
};

export default ProductScreen;
