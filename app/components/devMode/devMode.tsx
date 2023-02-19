import { View, Text } from 'react-native';
import React from 'react';
import devModeStyles from './devMode.styles';
import { Env } from '../../utils';
import { useTranslation } from 'react-i18next';

export default function DevMode() {
  const { t } = useTranslation();

  if (!Env.isDevMode()) {
    return (null);
  }

  return (
    <View style={devModeStyles.container}>
      <Text style={devModeStyles.text}>
        {t('Development Mode Detected')}
      </Text>
    </View>
  );
}
