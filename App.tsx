import React from 'react';
import { NativeBaseProvider, Box, StatusBar } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Box>Hello World!!!</Box>
    </NativeBaseProvider>
  );
}
