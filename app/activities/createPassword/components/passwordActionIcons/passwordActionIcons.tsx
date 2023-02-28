import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts } from '../../../../res';
import styles from './passwordActionIcons.styles';

interface Props {
  showEye: boolean,
  onPressEye: () => void,
  onPressGeneratePassword: () => void
}

export default function PasswordActionIcons({
  showEye,
  onPressEye,
  onPressGeneratePassword,
}: Props) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressEye}
        style={styles.actionButton}>
        <Icon
          name={!showEye ? 'eye-outline' : 'eye-off-outline'}
          size={Fonts.Size.Title}
          color={Colors.System.Brand} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPressGeneratePassword}
        style={styles.actionButton}>

        <Icon
          name="color-wand-outline"
          size={Fonts.Size.Title}
          color={Colors.System.Brand} />
      </TouchableOpacity>
    </View>
  );
}
