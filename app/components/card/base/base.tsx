import React from 'react';
import { View } from 'react-native';
import styles from './base.styles';

interface Props {
  children: React.ReactNode
}

export default function CardBase({ children }: Props) {
  return (
    <View style={styles.container}>
      {children && children}
    </View>
  );
}
