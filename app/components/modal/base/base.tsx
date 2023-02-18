import React, { ReactNode } from 'react';
import { View } from 'react-native';
import baseStyles from './base.styles';

interface BaseModalProps {
  show: boolean,
  children?: ReactNode
}

export default function BaseModal({ show, children }: BaseModalProps) {
  if (!show) {
    return (
      null
    );
  }

  return (
    <View
      style={baseStyles.overlay}>
      <View style={baseStyles.modal}>
        { children && children }
      </View>
    </View>
  );
}
