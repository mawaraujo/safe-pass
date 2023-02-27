import { Text, TextStyle } from 'react-native';
import React from 'react';
import styles from './subTitle.styles';

interface Props {
  children?: string,
  style?: TextStyle
}

export default function SubTitle({ children, style }: Props) {
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
      ]}>

      {children && children}
    </Text>
  );
}
