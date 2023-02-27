import { Text, TextStyle } from 'react-native';
import React from 'react';
import titleStyles from './title.styles';

interface Props {
  children?: string,
  style?: TextStyle
}

export default function Title({ children, style }: Props) {
  if (!children) {
    return (
      null
    );
  }

  return (
    <Text
      style={[
        titleStyles.title,
        style && style,
      ]}>

      {children && children}
    </Text>
  );
}
