import React from 'react';
import { StatusBar } from 'react-native';

import SingIn from './src/scenes/SingIn';
import Background from './src/components/Background';

const App = () => {
  return (
    <Background>
      <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      <SingIn/>
    </Background>
  );
};

export default App;
