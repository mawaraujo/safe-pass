import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './button.styles';

interface IButtonProps {
  children?: React.ReactNode,
  text?: string,
  style?: ViewStyle,
  textStyle?: TextStyle,
  onPress?: () => void
}

export default function Button({children, text, style, textStyle, onPress}: IButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style && style,
      ]}>

      { (text && !children) && (
        <Text
          style={[
            styles.text,
            textStyle && textStyle,
          ]}>
          {text}
        </Text>
      )}

      { children && children }
    </TouchableOpacity>
  );
}
