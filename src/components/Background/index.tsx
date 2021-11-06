import React, { ReactNode } from 'react';
import { View } from 'react-native';

import styles from './styles';

interface Props {
  children: ReactNode
}

const Background = ({children}: Props) => {
  return (
    // buscar biblioteca linear gradient
    <View style={styles.container}>
      {children}
    </View>
  );
}

export default Background;