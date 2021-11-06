import React, { ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

interface Props {
  children: ReactNode
}

const Background = ({children}: Props) => {
  return (
    // buscar biblioteca linear gradient
    <LinearGradient colors={['#E51C44','#E51C44', '#2f3136', '#2f3136','#1e2025']} style={styles.container}>
      {children}
    </LinearGradient>
  );
}

export default Background;