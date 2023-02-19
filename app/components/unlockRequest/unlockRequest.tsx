import React from 'react';
import { Text, View } from 'react-native';
import { useLocalAuthentication } from '../../hooks';
import Button from '../button/button';
import styles from './unlockRequest.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../res';
import { useTranslation } from 'react-i18next';

export default function UnlockRequest() {
  const { t } = useTranslation();
  const { enabled, authorized, handlePrompt } = useLocalAuthentication();

  if (!enabled || authorized === true) {
    return (
      null
    );
  }

  return (
    <View style={styles.container}>
      <Icon
        name={
          authorized
            ? 'lock-open-outline'
            : 'lock-closed-outline'
        }
        size={90}
        color={Colors.System.Brand} />

      <Text style={styles.title}>
        {t('Unlock request title')}
      </Text>

      <Text style={styles.subTitle}>
        {t('Unlock request details')}
      </Text>

      <Button
        text={t('Continue') ?? 'Continue'}
        onPress={handlePrompt} />
    </View>
  );
}
