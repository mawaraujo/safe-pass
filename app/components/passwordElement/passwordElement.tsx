import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import type {NPassword} from '../../types';
import styles from './passwordElement.styles';

interface IPasswordElementProps {
  item: NPassword.Password
}

function Component({item}: IPasswordElementProps) {
  return (
    <TouchableOpacity
      style={styles.container}>

      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(
    Component,
    (_prev, _next) => true,
);
