import { StyleProp, Text as RNText, TextStyle } from 'react-native';
import React from 'react';
import textStyles from './text.styles';

interface Props {
  children?: string,
  style?: StyleProp<TextStyle> | undefined,
  muted?: boolean,
  bold?: boolean,
  small?: boolean,
}

export default function Text({ children, style, muted = false, bold = false, small = false }: Props) {
  if (!children) {
    return (
      null
    );
  }

  return (
    <RNText
      style={[
        textStyles.text,
        muted && textStyles.muted,
        bold && textStyles.bold,
        small && textStyles.small,
        style && style,
      ]}>

      {children && children}
    </RNText>
  );
}
