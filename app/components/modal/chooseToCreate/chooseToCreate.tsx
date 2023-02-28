import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import BaseModal from '../base/base';
import chooseToCreateStyles from './chooseToCreate.styles';
import { Navigation } from '../../../utils';
import { Colors, Fonts, Screens } from '../../../res';
import Button from '../../button/button';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import Title from '../../../components/title/title';
import Text from '../../../components/text/text';


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
      <Title>
        {t('Create').toString()}
      </Title>

      <View style={chooseToCreateStyles.container}>
        <Option
          icon="key-outline"
          onPress={() => handleNavigate(Screens.CreatePassword.Name)}
          value={t('Password')}/>

        <Option
          icon="pricetag-outline"
          onPress={() => handleNavigate(Screens.CreateTag.Name)}
          value={t('Tag')} />
      </View>

      <Button
        style={chooseToCreateStyles.actionButton}
        onPress={handleClose}
        text={t('Close') ?? 'Close'} />
    </BaseModal>
  );
}

interface OptionProps {
  onPress: () => void,
  icon: string,
  value: string
}

function Option({ onPress, icon, value }: OptionProps) {
  return (
    <TouchableOpacity
      style={chooseToCreateStyles.button}
      onPress={onPress}>
      <View style={chooseToCreateStyles.buttonLeft}>
        <Icon
          name={icon}
          color={Colors.System.Brand}
          size={Fonts.Size.Icon} />

        <Text style={chooseToCreateStyles.buttonText}>
          {value}
        </Text>
      </View>

      <Icon
        name="chevron-forward-outline"
        color={Colors.System.Brand}
        size={Fonts.Size.Icon} />
    </TouchableOpacity>
  );
}
