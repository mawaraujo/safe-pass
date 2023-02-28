import { StyleProp, Text, TextStyle } from 'react-native';
import React from 'react';
import titleStyles from './subTitle.styles';

interface Props {
  children?: string,
  style?: StyleProp<TextStyle> | undefined,
  muted?: boolean,
}

export default function SubTitle({ children, style, muted = false }: Props) {
  if (!children) {
    return (
      null
    );
  }

  return (
    <Text
      style={[
        titleStyles.subTitle,
        muted && titleStyles.muted,
        style && style,
      ]}>

      {children && children}
    </Text>
  );
}
