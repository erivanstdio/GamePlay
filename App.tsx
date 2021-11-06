import React from 'react';
import { StatusBar } from 'react-native';

import SingIn from './src/screens/SingIn';
import Background from './src/components/Background';
import Home from './src/screens/Home';

const App = () => {
  return (
    <Background>
      <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      <Home />
    </Background>
  );
};

export default App;
