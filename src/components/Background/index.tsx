import React, { ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

interface Props {
  children: ReactNode
}

const Background = ({children}: Props) => {
  return (
    // buscar biblioteca linear gradient
    <LinearGradient colors={['#2f3136','#2a3030','#1f2126']} style={styles.container}>
      {children}
    </LinearGradient>
  );
}

export default Background;