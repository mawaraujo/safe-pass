import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import BaseModal from '../base/base';
import chooseToCreateStyles from './chooseToCreate.styles';
import { Navigation } from '../../../utils';
import { Colors, Screens } from '../../../res';
import Button from '../../button/button';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

interface ChooseToCreateProps {
  show: boolean,
  onClose?: () => void
}

export default function ChooseToCreate({ show, onClose }: ChooseToCreateProps) {
  const { t } = useTranslation();

  const handleNavigate = React.useCallback((screen: string) => {
    Navigation.navigate(screen);
    handleClose();
  }, []);

  const handleClose = React.useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <BaseModal show={show}>
      <Text style={chooseToCreateStyles.title}>
        {t('Create')}
      </Text>

      <View style={chooseToCreateStyles.container}>
        <TouchableOpacity
          style={chooseToCreateStyles.button}
          onPress={() => handleNavigate(Screens.CreatePassword.Name)}>
          <Icon
            name="key-outline"
            color={Colors.System.Brand}
            size={28} />

          <Text style={chooseToCreateStyles.buttonText}>
            {t('Password')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={chooseToCreateStyles.button}
          onPress={() => handleNavigate(Screens.CreateTag.Name)}>
          <Icon
            name="pricetag-outline"
            color={Colors.System.Brand}
            size={28} />

          <Text style={chooseToCreateStyles.buttonText}>
            {t('Tag')}
          </Text>
        </TouchableOpacity>
      </View>

      <Button
        onPress={handleClose}
        style={chooseToCreateStyles.cancelButton}
        textStyle={chooseToCreateStyles.cancelButtonText}
        text={t('Close') ?? 'Close'} />
    </BaseModal>
  );
}
