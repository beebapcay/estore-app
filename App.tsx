import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider, Box, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

/**
 * Root component in project
 *
 * @returns JSXElement
 */
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar />
        <Box>Hello World!!!</Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
