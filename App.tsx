import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Routes, RootNavigator } from './navigations';
import { colors } from './theme';

const theme = extendTheme({
  colors: colors,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light'
  }
});

const App = () => {
  const isAuthorized = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <RootNavigator initialRouteName={isAuthorized ? Routes.APP : Routes.AUTH} />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
