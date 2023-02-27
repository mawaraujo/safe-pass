import { Text, TextStyle } from 'react-native';
import React from 'react';
import styles from './subTitle.styles';

interface Props {
  children?: string,
  style?: TextStyle,
  muted?: boolean
}

export default function SubTitle({ children, style, muted = true }: Props) {
  if (!children) {
    return (
      null
    );
  }

  return (
    <Text
      style={[
        styles.subTitle,
        style && style,
        muted && styles.muted,
      ]}>

      {children && children}
    </Text>
  );
}
