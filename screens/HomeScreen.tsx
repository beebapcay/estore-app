import React from 'react';
import { Box, Center, Input, KeyboardAvoidingView, Text } from 'native-base';
import { NBSafeAreaView } from '../components';
import { SearchBox } from '../components';

const HomeScreen = () => {
  return (
    <NBSafeAreaView flex={1} bgColor="background">
      <Center flex={1}>
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
        <Input placeholder="abc" />
      </Center>
    </NBSafeAreaView>
  );
};

export default HomeScreen;
