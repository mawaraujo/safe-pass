import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {Colors} from '../../res';
import spinnerStyles from './spinner.styles';

function Spinner() {
  return (
    <SafeAreaView
      style={spinnerStyles.container}>
      <ActivityIndicator
        color={Colors.System.Brand}
        size="large" />

    </SafeAreaView>
  );
}

export default React.memo(Spinner, () => true);
