import React from 'react';
import { View, Text } from 'react-native';
import styles from './empty.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../res';

interface IEmptyProps {
  text?: string,
}

function Empty({ text }: IEmptyProps) {
  return (
    <View style={styles.container}>
      <Icon
        name="leaf-outline"
        size={90}
        color={Colors.System.Brand} />

      <Text style={styles.text}>
        {text && text}
      </Text>
    </View>
  );
}

export default React.memo(Empty, () => true);
