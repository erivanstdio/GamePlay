import React from 'react';
import { Text, View } from 'react-native';
import Profile from '../../components/Profile';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile/>
      </View>
    </View>
  );
}

export default Home;