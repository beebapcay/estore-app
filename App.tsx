import 'react-native-gesture-handler';
import React from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigations';
import { colors } from './src/theme';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import { StatusBar } from 'expo-status-bar';

const theme = extendTheme({
  colors: colors,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light'
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <StatusBar style="dark" backgroundColor={colors.background} translucent={false} />
          <AppNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
