import React from 'react';
import {Text, View} from 'react-native';
import {useLocalAuthentication} from '../../hooks';
import Button from '../button/button';
import styles from './unlockRequest.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../res';

export default function UnlockRequest() {
  const {enabled, authorized, handlePrompt} = useLocalAuthentication();

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

      <Text style={styles.title}>Locked</Text>
      <Text style={styles.subTitle}>Use your device unlock system to continue</Text>

      <Button
        text="Continue"
        onPress={handlePrompt} />
    </View>
  );
}
