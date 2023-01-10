import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import type {NPassword} from '../../types';
import styles from './passwordElement.styles';

interface IPasswordElementProps {
  item: NPassword.Password
}

export default function PasswordElement({item}: IPasswordElementProps) {
  return (
    <TouchableOpacity
      style={styles.container}>

      <Text>{item.email}</Text>
    </TouchableOpacity>
  );
}
