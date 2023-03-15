import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Text from '../text/text';
import styles from './actionButton.styles';

interface Props {
  onPress?: () => void,
  icon: string,
  text: string,
}

export default function ActionButton({ onPress, icon, text }: Props) {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={styles.uploadButton}>

        <Icon
          name={icon}
          size={50}
          color="white" />
      </TouchableOpacity>

      <Text muted size="2" style={styles.selectText}>
        {text}
      </Text>
    </React.Fragment>
  );
}
