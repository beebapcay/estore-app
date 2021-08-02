import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  Box,
  HStack,
  Heading,
  FormControl,
  Input,
  Icon,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  VStack,
  AlertDialog,
  Center,
  IconButton
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../hooks';
import { userActions } from '../redux/slices';
import Routes from '../navigations/routes';
import { sstoreApi } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductListCheckout } from '../containers';
import { Product } from '../models';
import { Ionicons } from '@expo/vector-icons';
// import { useFocusEffect } from '@react-navigation/native';

const CheckoutScreen = () => {
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

  // const cancelRef = React.useRef();

  const userData = useAppSelector((state) => state.userState.userData);

  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const [errFirstName, setErrFirstName] = useState(false);
  const [errLastName, setErrLastName] = useState(false);
  const [errAddress, setErrAddress] = useState(false);

  // useFocusEffect(() => {
  //   return () => navigation.goBack();
  // });

  const [buyOrderStatus, setBuyOrderStatus] = useState('');

  const onConfirm = () => {
    if (!firstName) setErrFirstName(true);
    else setErrFirstName(false);

    if (!lastName) setErrLastName(true);
    else setErrLastName(false);

    if (!address) setErrAddress(true);
    else setErrAddress(false);

    if (firstName && lastName && address) {
      (async () => {
        const response = await sstoreApi.buyOrder(firstName, lastName, address, note, userData, cart);
        const responseStatus = response.data;
        console.log(responseStatus);
        if (responseStatus === 'Order failed') setBuyOrderStatus('failed');
        else setBuyOrderStatus('success');
      })();
      console.log('send');
    }
  };

  const onOrderSuccess = () => {
    dispatch(userActions.resetCart());
    navigation.goBack();
    navigation.navigate(Routes.HOME);
  };

  return (
    <Box flex={1} bgColor="background">
      {buyOrderStatus === 'success' ? (
        <Center zIndex={999} position="absolute" w="100%" height="100%" top={0}>
          <Center bgColor="white" paddingY="15px" w="70%" shadow={2} borderRadius={20}>
            <Heading fontSize={19} textAlign="center" color="brand.800">
              Your cart is ordered successfully
            </Heading>
            <IconButton
              onPress={onOrderSuccess}
              marginTop={3.5}
              bgColor="transparent"
              icon={<Icon as={Ionicons} name="checkmark-circle-sharp" color="teal.300" size="70px" />}
            ></IconButton>
          </Center>
        </Center>
      ) : undefined}

      <KeyboardAvoidingView flex={1} behavior="padding" keyboardVerticalOffset={50} paddingX="5%">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Heading marginTop={1.5} fontSize={16} color="red.600">
            Please double check your products in cart
          </Heading>

          <ProductListCheckout
            itemList={cart.items}
            onTouchItem={(item: Product) => navigation.navigate(Routes.PRODUCT, { productId: item.id })}
            style={{ marginVertical: 20 }}
          />

          <Box>
            <Box>
              <HStack alignItems="center" justifyContent="space-between">
                <HStack alignItems="flex-end">
                  <Text color="gray.600" fontSize={16} bold>
                    Subtotal:
                  </Text>
                  <Text color="#363B64" fontSize={17} bold marginLeft={2}>
                    ${cart.subTotalCost}
                  </Text>
                </HStack>

                <HStack alignItems="flex-end">
                  <Text color="gray.600" fontSize={16} bold>
                    Shipping:
                  </Text>
                  <Text color="#363B64" fontSize={17} bold marginLeft={2}>
                    ${cart.shipCost}
                  </Text>
                </HStack>
              </HStack>

              <HStack alignItems="flex-end" marginTop={1.5}>
                <Text color="heading" fontSize={18} bold>
                  Total:
                </Text>
                <Text color="brand.800" fontSize={20} bold marginLeft={2}>
                  ${cart.totalCost}
                </Text>
              </HStack>
            </Box>
            <Box marginBottom="50px" marginTop={5}>
              <Heading marginBottom={2.5} fontSize={16} color="red.600">
                Please double check your information delivery
              </Heading>

              <VStack space={3}>
                <HStack space={3.5}>
                  <FormControl isRequired flex={1} isInvalid={errFirstName}>
                    <Input
                      w="100%"
                      fontSize={18}
                      autoCapitalize="words"
                      value={firstName}
                      onChangeText={setFirstName}
                      bgColor="white"
                      placeholder="First Name"
                      borderColor="gray.400"
                      _focus={{ borderColor: 'gray.400' }}
                    ></Input>
                    {/* <FormControl.ErrorMessage>Please input your first name</FormControl.ErrorMessage> */}
                  </FormControl>

                  <FormControl isRequired flex={1} isInvalid={errLastName}>
                    <Input
                      w="100%"
                      fontSize={18}
                      autoCapitalize="words"
                      bgColor="white"
                      value={lastName}
                      onChangeText={setLastName}
                      placeholder="Last Name"
                      borderColor="gray.400"
                      _focus={{ borderColor: 'gray.400' }}
                    ></Input>
                    {/* <FormControl.ErrorMessage>Please input your last name</FormControl.ErrorMessage> */}
                  </FormControl>
                </HStack>

                <FormControl isRequired isInvalid={errAddress}>
                  <Input
                    w="100%"
                    fontSize={18}
                    autoCapitalize="words"
                    bgColor="white"
                    value={address}
                    onChangeText={setAddress}
                    placeholder="Address"
                    borderColor="gray.400"
                    _focus={{ borderColor: 'gray.400' }}
                  ></Input>
                  {/* <FormControl.ErrorMessage>Please input your address</FormControl.ErrorMessage> */}
                </FormControl>

                <FormControl>
                  <Input
                    w="100%"
                    fontSize={18}
                    // numberOfLines={4}
                    bgColor="white"
                    value={note}
                    onChangeText={setNote}
                    placeholder="Note"
                    borderColor="gray.400"
                    _focus={{ borderColor: 'gray.400' }}
                  ></Input>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
      <Button
        marginTop={2.5}
        marginBottom="35px"
        w="80%"
        paddingY={2}
        borderRadius={999}
        bgColor="#363B64"
        _text={{ fontWeight: 'bold', fontSize: 18 }}
        alignSelf="center"
        disabled={cart.items.length === 0}
        startIcon={<Icon as={Ionicons} name="checkmark-done" size={7} marginLeft={1.5} />}
        _pressed={{ backgroundColor: '#2e3254' }}
        _disabled={{ backgroundColor: '#42455f' }}
        onPress={() => onConfirm()}
      >
        Confirm
      </Button>
    </Box>
  );
};

export default CheckoutScreen;
