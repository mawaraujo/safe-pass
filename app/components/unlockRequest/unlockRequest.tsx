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
      <View style={styles.topContainer}>
        <Icon
          name={
          authorized
            ? 'lock-open-outline'
            : 'lock-closed-outline'
          }
          size={90}
          color={Colors.System.Brand} />

        <Text style={styles.title}>
          {t('Unlock request')}
        </Text>
      </View>

      <Button
        text={t('Unlock') ?? 'Unlock'}
        onPress={handlePrompt} />
    </View>
  );
}
