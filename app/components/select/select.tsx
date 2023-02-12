import React from 'react';
import { View, Text } from 'react-native';
import styles from './select.styles';
import { Strings } from '../../utils';
import { Picker } from '@react-native-picker/picker';

type ISelectProps = {
  label?: string,
  validationError?: string,
  options?: Array<{ name: string, value: string }>,
  value?: string,
  onChangeText?: (value: string) => void
}


export default function Select({ label, validationError, options, value, onChangeText }: ISelectProps) {
  const [focused, setFocused] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      {
        label?.length && (
          <Text style={styles.label}>{label}</Text>
        )
      }

      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => onChangeText?.(itemValue)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[
          styles.input,
          (focused && styles.inputFocused),
          (validationError ? styles.inputError : null),
        ]}>

        <Picker.Item
          label="None"
          value="" />

        {
          options && options.map((opt, index) => (
            <Picker.Item
              label={opt.name}
              key={index + '__option_select'}
              value={opt.value} />
          ))
        }
      </Picker>

      {
        (validationError && validationError?.length > 0) && (
          <Text style={styles.errorMessage}>
            {
              Strings.capitalizeFirstLetter(
                  validationError,
              )
            }
          </Text>
        )
      }
    </View>
  );
}
