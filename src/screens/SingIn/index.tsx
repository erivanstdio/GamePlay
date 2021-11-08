import React from 'react';
import { View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './styles';
import IllustrationImg from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon' ;

interface Props {
  navigation: any;
}

const SingIn = ({navigation}: Props) => {
  
  function handleNavigate() {
    navigation.navigate('Home')
  }

  return (
    <LinearGradient colors={['#E51C44','#E51C44', '#2f3136', '#2f3136','#1e2025']} style={{flex: 1}}>
      <View style={styles.container}>
        
        <Image 
          source={IllustrationImg}
          style={styles.image}
          resizeMode='stretch'
        />
        <View style={styles.content}>
          <Text style={styles.title}>Conecte-se {'\n'} e organize suas {'\n'} jogatinas</Text>
          <Text style={styles.subtitle}>Crie grupos para jogar seus games {`\n`} favoritos com seus amigos</Text>
          <ButtonIcon
            onPress={() => handleNavigate()}
            activeOpacity={0.7} 
            title="Entrar com Discord"
          />
        </View>
      </View>
    </LinearGradient>
  );
}

export default SingIn;