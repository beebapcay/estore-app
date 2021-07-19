import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { extendTheme, NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Routes, AppNavigator } from './src/navigations';
import { colors } from './src/theme';

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
          <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
          <AppNavigator initialRouteName={isAuthorized ? Routes.MAIN : Routes.AUTH} />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
