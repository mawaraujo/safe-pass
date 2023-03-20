import React from 'react';
import { View } from 'react-native';
import Text from '../../text/text';
import styles from './itemSlot.styles';

interface ItemProps {
  title: string,
  children?: React.ReactNode,
  childrenPosition?: 'left' | 'bottom',
}

export default function ItemSlot({ title, children, childrenPosition = 'left' }: ItemProps) {
  return (
    <View
      style={[
        styles.container,
        childrenPosition === 'bottom' && styles.childrenBottom,
      ]}>
      <View style={styles.leftContainer}>
        <Text size="2">{title && title}</Text>
      </View>

      { children && children }
    </View>
  );
}
