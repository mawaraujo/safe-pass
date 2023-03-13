import React from 'react';
import { View } from 'react-native';
import styles from './card.styles';

interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return (
    <View style={styles.container}>
      {children && children}
    </View>
  );
}
