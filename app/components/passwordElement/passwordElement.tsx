import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import type {NPassword} from '../../types';
import styles from './passwordElement.styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface IPasswordElementProps {
  item: NPassword.Password,
  onPress?: (password: NPassword.Password) => void
}

export default function PasswordElement({item, onPress}: IPasswordElementProps) {

  const handlePress = (): void => {
    if (onPress) {
      onPress(item);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}>

      <View style={styles.left}>
        <Text style={styles.title}>{item.name}</Text>

        { item.username && !item.email && (
          <Text>{item.username}</Text>
        )}

        { !item.username && item.email && (
          <Text>{item.username}</Text>
        )}
      </View>

      <Icon
        name="chevron-forward-outline"
        size={26} />
    </TouchableOpacity>
  );
}
