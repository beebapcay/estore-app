import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Routes, AppNavigator } from './navigations';
import { StatusBar } from 'native-base';

const App = () => {
  const isAuthorized = false;

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar />
        <AppNavigator initialRouteName={isAuthorized ? Routes.MAIN : Routes.AUTH} />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
