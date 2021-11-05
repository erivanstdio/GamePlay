import React from 'react';
import SingIn from './src/scenes/SingIn';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
    <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    <SingIn/>
    </>
  );
};

export default App;
