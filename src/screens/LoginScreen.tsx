import React, { useState } from 'react';
import { Text, Image, Box, HStack, Heading, FormControl, Input, Button, Pressable, ScrollView } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Routes from '../navigations/routes';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errUsername, setErrUsername] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');

  const navigation = useNavigation();

  const onLogin = () => {
    if (!username) setErrUsername(true);
    else setErrUsername(false);

    if (!password) setErrPassword(true);
    else setErrPassword(false);

    if (username && password) {
      console.log(`${username}  ${password}`);
    }
  };

  return (
    <Box flex={1} bgColor="background" paddingX="10%">
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack w="100%" justifyContent="space-between" h="150px">
          <Heading alignSelf="flex-end" color="heading" fontSize={26}>
            Hey,
          </Heading>
          <Image source={require('../../assets/app/adaptive-icon.png')} alt=" " w="40%" h="100%" borderRadius={15} />
        </HStack>
        <Box>
          <Heading color="brand.800" fontSize={34} marginTop={0.5}>
            Login Now.
          </Heading>
          <Text marginTop={0.5} bold color="gray.500" fontSize={18}>
            Welcome to SStore
          </Text>
        </Box>
        <Box marginTop="35px">
          <FormControl isRequired isInvalid={errUsername}>
            <Input
              w="100%"
              fontSize={18}
              bgColor="white"
              value={username}
              onChangeText={setUsername}
              placeholder="Email or Phone"
              borderColor="gray.400"
              _focus={{ borderColor: 'gray.400' }}
            ></Input>
            {/* <FormControl.ErrorMessage>Please input your email or phone</FormControl.ErrorMessage> */}
          </FormControl>

          <FormControl isRequired marginTop="20px" isInvalid={errPassword}>
            <Input
              type="password"
              w="100%"
              fontSize={18}
              bgColor="white"
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              borderColor="gray.400"
              _focus={{ borderColor: 'gray.400' }}
            ></Input>
            {/* <FormControl.ErrorMessage>Please input your password</FormControl.ErrorMessage> */}
          </FormControl>
        </Box>

        {loginStatus === 'failed' ? (
          <Text color="red.600" fontSize={16} marginTop={2.5}>
            Wrong information. Login failed
          </Text>
        ) : undefined}

        <Box marginTop="15%">
          <Button
            borderRadius={10}
            _text={{ fontSize: 20, fontWeight: 'bold' }}
            bgColor="brand.800"
            onPress={() => onLogin()}
          >
            Login
          </Button>

          <Pressable
            marginTop="35px"
            marginBottom="35px"
            bgColor="transparent"
            onPress={() => navigation.navigate(Routes.REGISTER)}
          >
            <HStack justifyContent="center" alignItems="center">
              <Text fontSize={16} color="heading">
                Don&apos;t have an account?
              </Text>
              <Text fontSize={18} marginLeft={2.5} bold color="brand.800">
                Register Now
              </Text>
            </HStack>
          </Pressable>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default LoginScreen;
