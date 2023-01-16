import React from 'react';
import {View, ActivityIndicator, SafeAreaView} from 'react-native';
import {Colors} from '../../res';
import spinnerStyles from './spinner.styles';

export default function Spinner() {
  return (
    <SafeAreaView
      style={spinnerStyles.container}>
      <ActivityIndicator
        color={Colors.System.Brand}
        size="large" />

    </SafeAreaView>
  );
}
