import React from 'react';
import { Text, View } from 'react-native';
import BaseModal from '../base/base';
import styles from './alert.styles';
import Button from '../../button/button';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../../../hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../res';

export default function Alert() {
  const { t } = useTranslation();
  const { hide } = useAlert();

  const alertValue = useSelector((state: RootState) => state.alert);
  const alertColor = Colors.System[alertValue.type];

  const alertIcon = React.useMemo(() => {
    switch (alertValue.type) {
      case 'Success':
        return 'thumbs-up-outline';

      case 'Info':
      case 'Warning':
        return 'alert-circle-outline';

      default:
        return 'skull-outline';
    }
  }, [alertValue]);

  return (
    <BaseModal show={(alertValue.show === true)}>
      <View style={styles.container}>
        <Icon
          name={alertIcon}
          size={80}
          color={alertColor} />

        <Text
          style={[
            styles.title,
            { color: alertColor },
          ]}>
          {alertValue.title}
        </Text>
      </View>

      <Button
        onPress={hide}
        style={[
          styles.button,
          {
            backgroundColor: alertColor,
          },
        ]}
        text={t('Accept') ?? 'Accept'} />
    </BaseModal>
  );
}
