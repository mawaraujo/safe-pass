import React from 'react';
import { View } from 'react-native';
import styles from './checkEntry.styles';
import CheckBox from '@react-native-community/checkbox';
import { Colors } from '../../../../../res';
import Text from '../../../../../components/text/text';
import { useTranslation } from 'react-i18next';

interface Props {
  name: string,
  disabled?: boolean,
  checked?: boolean,
  onAdd?: () => void
  onRemove?: () => void,
  showDescription?: boolean,
  description?: string,
}

export default function CheckEntry({
  name,
  disabled,
  checked,
  onAdd,
  onRemove,
  showDescription = false,
  description,
}: Props) {

  const { t } = useTranslation();

  return (
    <View style={styles.cardContent}>
      <CheckBox
        tintColors={{
          true: Colors.System.Brand,
        }}
        disabled={disabled}
        style={[
          disabled && styles.checkboxDisabled,
          styles.checkbox,
        ]}
        value={checked}
        onValueChange={(val) => {
          if (val) return onAdd?.();
          onRemove?.();
        }}
      />
      <View style={styles.cardContentText}>
        <Text size="2" muted={disabled}>{name}</Text>

        {
          showDescription && description && (
            <Text muted>
              {
                description ||
                t('NoInformation').toString()
              }
            </Text>
          )
        }
      </View>
    </View>
  );
}
