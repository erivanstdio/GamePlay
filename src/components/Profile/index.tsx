import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';
import ProfilePic from '../../assets/profilePNG.png'
import Avatar from '../Avatar';


const Profile = () => {
  return (
    <View style={styles.container}>
      
      <Avatar urlImage="https://github.com/erivanstdio.png"/>

      <View>
      
        <View style={styles.user}>
            <Text style={styles.greeting}>Olá,</Text>
            <Text style={styles.userName}>Brunno</Text>
        </View>
      
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      
      </View>

    </View>
  );
}

export default Profile;