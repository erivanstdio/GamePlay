import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity,
  TouchableOpacityProps,
  Image, 
} from 'react-native';

import styles from './styles';
import DiscordImg from '../../assets/discord.png'

// tipando propriedades recebidas pelo componente
interface Props extends TouchableOpacityProps {
  title: string;
  // caso optasse por uma propriedade opcional, deveria ser escrito assim:
  // title?: string // com interrogação
}

const ButtonIcon = ({title, ...rest }: Props) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image 
          source={DiscordImg}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonIcon;