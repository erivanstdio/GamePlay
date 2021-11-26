import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../global/styles/theme';

import styles from './styles';

interface Props {
  urlImage: string;
}

// outra maneira de fazer: (urlImage: string) => {}
const Avatar = ({urlImage}: Props) => {

  // desestruturando para melhor visualização
  const { primary, line } = theme.colors;

  return(
    <LinearGradient 
      colors={[primary, line]}
      style={styles.container}
    >
      <Image 
        source={ {uri: urlImage} }
        style={styles.image}
      />
    </LinearGradient>
  );
}

export default Avatar;