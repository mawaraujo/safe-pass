import React from 'react';
import { View } from 'react-native';
import BaseModal from '../base/base';
import styles from './alert.styles';
import Button from '../../button/button';
import { useTranslation } from 'react-i18next';
import { useAlert } from '../../../hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../res';
import Text from '../../text/text';

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
          size="3"
          bold
          style={[
            styles.title,
            { color: alertColor },
          ]}>
          {alertValue.title}
        </Text>

        {
          alertValue.extraInformation && (
            <Text
              style={[
                styles.extraInformation,
                { color: alertColor },
              ]}>
              {alertValue.extraInformation}
            </Text>
          )
        }
      </View>

      <Button
        onPress={hide}
        textStyle={{ color: 'white' }}
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
