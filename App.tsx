import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { extendTheme, NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Routes, AppNavigator } from './src/navigations';
import { colors } from './src/theme';
import { Provider } from 'react-redux';
import { store } from './src/redux';

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
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
            <AppNavigator initialRouteName={isAuthorized ? Routes.MAIN : Routes.AUTH} />
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
