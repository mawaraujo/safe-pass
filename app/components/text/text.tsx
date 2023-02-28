import { StyleProp, Text as RNText, TextStyle } from 'react-native';
import React from 'react';
import textStyles from './text.styles';
import { Fonts } from '../../res';

interface Props {
  children?: string,
  style?: StyleProp<TextStyle> | undefined,
  muted?: boolean,
  bold?: boolean,
  size?: '1' | '2' | '3'
}

function getFontSize(size: string | undefined = '1'): number {
  switch (size) {
    case '2': return Fonts.Size.SubTitle;
    case '3': return Fonts.Size.Title;

    default:
      return Fonts.Size.Text;
  }
}

export default function Text({
  children,
  style,
  muted = false,
  bold = false,
  size,
}: Props) {

  if (!children) {
    return (
      null
    );
  }

  return (
    <RNText
      style={[
        textStyles.text,
        {
          fontSize: getFontSize(size),
        },
        muted && textStyles.muted,
        bold && textStyles.bold,
        style && style,
      ]}>

      {children && children}
    </RNText>
  );
}
