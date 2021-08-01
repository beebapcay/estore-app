import React, { useState } from 'react';
import {
  Text,
  Image,
  Box,
  HStack,
  Heading,
  FormControl,
  Input,
  Button,
  Pressable,
  ScrollView,
  VStack,
  Radio,
  KeyboardAvoidingView
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigations/routes';
import { sstoreApi } from '../api';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [errFirstName, setErrFirstName] = useState(false);
  const [errLastName, setErrLastName] = useState(false);
  const [errAge, setErrAge] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errPassword, setErrPassword] = useState(false);

  const [regisStatus, setRegisStatus] = useState('');

  const navigation = useNavigation();

  const onRegister = () => {
    if (!firstName) setErrFirstName(true);
    else setErrFirstName(false);

    if (!lastName) setErrLastName(true);
    else setErrLastName(false);

    if (!age) setErrAge(true);
    else setErrAge(false);

    if (!email) setErrEmail(true);
    else setErrEmail(false);

    if (!phone) setErrPhone(true);
    else setErrPhone(false);

    if (!password) setErrPassword(true);
    else setErrPassword(false);

    if (firstName && lastName && age && gender && email && phone && password) {
      (async () => {
        const response = await sstoreApi.authRegister(
          firstName,
          lastName,
          parseInt(age),
          gender,
          email,
          phone,
          password
        );
        const registerStatus = response.data;
        if (registerStatus === 'Register failed') setRegisStatus('failed');
        else setRegisStatus('success');
      })();
    }
  };

  return (
    <Box flex={1} bgColor="background" paddingX="10%">
      <KeyboardAvoidingView flex={1} behavior="padding" keyboardVerticalOffset={50}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HStack w="100%" justifyContent="space-between" h="100px">
            <Heading alignSelf="flex-end" color="heading" fontSize={26}>
              Hey,
            </Heading>
            <Image source={require('../../assets/app/adaptive-icon.png')} alt=" " w="35%" h="100%" borderRadius={15} />
          </HStack>
          <Box>
            <Heading color="brand.800" fontSize={34} marginTop={0.5}>
              Register Now.
            </Heading>
            <Text marginTop={0.5} bold color="gray.500" fontSize={18}>
              Becoming a member of SStore
            </Text>
          </Box>

          <VStack marginTop="35px" space={3}>
            <HStack space={3.5}>
              <FormControl isRequired flex={1} isInvalid={errFirstName}>
                <Input
                  w="100%"
                  fontSize={18}
                  autoCapitalize="none"
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
                  autoCapitalize="none"
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

            <HStack space={3.5}>
              <FormControl isRequired flex={1} isInvalid={errAge}>
                <Input
                  w="100%"
                  fontSize={18}
                  autoCapitalize="none"
                  bgColor="white"
                  value={age}
                  onChangeText={setAge}
                  placeholder="Age"
                  borderColor="gray.400"
                  _focus={{ borderColor: 'gray.400' }}
                ></Input>
                {/* <FormControl.ErrorMessage>Please input your age</FormControl.ErrorMessage> */}
              </FormControl>

              <FormControl flex={2} alignContent="flex-end" justifyContent="center">
                <Radio.Group
                  name="gender"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  value={gender}
                  onChange={setGender}
                >
                  <Radio value="male" colorScheme="warning">
                    Male
                  </Radio>
                  <Radio value="female" marginLeft={2} colorScheme="warning">
                    Female
                  </Radio>
                </Radio.Group>
              </FormControl>
            </HStack>

            <FormControl isRequired isInvalid={errEmail}>
              <Input
                w="100%"
                fontSize={18}
                bgColor="white"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                borderColor="gray.400"
                _focus={{ borderColor: 'gray.400' }}
              ></Input>
              {/* <FormControl.ErrorMessage>Please input your email</FormControl.ErrorMessage> */}
            </FormControl>

            <FormControl isRequired isInvalid={errPhone}>
              <Input
                w="100%"
                fontSize={18}
                bgColor="white"
                autoCapitalize="none"
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone Number"
                borderColor="gray.400"
                _focus={{ borderColor: 'gray.400' }}
              ></Input>
              {/* <FormControl.ErrorMessage>Please input your phone</FormControl.ErrorMessage> */}
            </FormControl>

            <FormControl isRequired isInvalid={errPassword}>
              <Input
                type="password"
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
                w="100%"
                fontSize={18}
                bgColor="white"
                placeholder="Password"
                borderColor="gray.400"
                _focus={{ borderColor: 'gray.400' }}
              ></Input>
              {/* <FormControl.ErrorMessage>Please input your password</FormControl.ErrorMessage> */}
            </FormControl>
          </VStack>

          {regisStatus === 'failed' ? (
            <Text color="red.600" fontSize={16} marginTop={2.5} bold>
              Email or phone number already exists. Please change your email and phone number
            </Text>
          ) : undefined}

          {regisStatus === 'success' ? (
            <Text color="red.600" fontSize={16} marginTop={2.5} bold>
              Sign up success. Please log in.
            </Text>
          ) : undefined}

          <Box marginTop="10%">
            <Button
              borderRadius={10}
              _text={{ fontSize: 20, fontWeight: 'bold' }}
              bgColor="brand.800"
              onPress={() => onRegister()}
            >
              Register
            </Button>

            <Pressable
              marginTop="25px"
              marginBottom="35px"
              bgColor="transparent"
              onPress={() => navigation.navigate(Routes.LOGIN)}
            >
              <HStack justifyContent="center" alignItems="center">
                <Text fontSize={16} color="heading">
                  Already have an account?
                </Text>
                <Text fontSize={18} marginLeft={2.5} bold color="brand.800">
                  Login
                </Text>
              </HStack>
            </Pressable>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default RegisterScreen;
