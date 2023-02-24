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
        return 'checkmark-circle-outline';

      default:
        return 'alert-circle-outline';
    }
  }, [alertValue]);

  return (
    <BaseModal show={(alertValue.show === true)}>
      <View style={styles.container}>
        <Icon
          name={alertIcon}
          size={70}
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
        textStyle={{ color: alertColor }}
        style={[
          styles.button,
          {
            borderColor: alertColor,
          },
        ]}
        text={t('Accept') ?? 'Accept'} />
    </BaseModal>
  );
}
