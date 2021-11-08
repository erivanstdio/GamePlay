import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SingIn from '../screens/SingIn';

// caso não tivesse sido desestruturado, a forma de escrita seria por exemplo: <Nome_da_variavel.Navigator>.
// portanto, bem mais prática a desestruturação >>>

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes = () => {
  return(
    <Navigator
      screenOptions={{
        
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen 
        name="SingIn"
        component={SingIn}
      />
      <Screen 
        name="Home"
        component={Home}
      />
    </Navigator>
  );
}

export default AuthRoutes;