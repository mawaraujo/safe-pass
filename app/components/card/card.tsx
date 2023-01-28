import React from 'react';
import {View} from 'react-native';
import styles from './card.styles';

interface Props {
  children: React.ReactNode
}

function Card({children}: Props) {
  return (
    <View style={styles.container}>
      {children && children}
    </View>
  );
}

export default React.memo(Card, () => true);
