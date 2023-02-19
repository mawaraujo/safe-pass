import { View, Text } from 'react-native';
import React from 'react';
import devModeStyles from './devMode.styles';
import { Env } from '../../utils';

export default function DevMode() {
  if (!Env.isDevMode()) {
    return (null);
  }

  return (
    <View style={devModeStyles.container}>
      <Text style={devModeStyles.text}>Development mode detected</Text>
    </View>
  );
}
