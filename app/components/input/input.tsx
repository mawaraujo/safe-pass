import React from 'react';
import { View, Text, TextInput as RNTextInput, TextInputProps } from 'react-native';
import styles from './input.styles';
import { Strings } from '../../utils';
import { Colors } from '../../res';

type Props = {
  label?: string,
  validationError?: string,
  textAlignVerticalTop?: boolean,
}

export default function Input({
  label,
  validationError,
  textAlignVerticalTop = false,
  ...rest
}: Props & TextInputProps) {

  const [focused, setFocused] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      {
        label?.length && (
          <Text style={styles.label}>{label}</Text>
        )
      }

      <RNTextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={Colors.Light.Muted}
        style={[
          styles.input,
          (textAlignVerticalTop && styles.textAlignVerticalTop),
          (focused && styles.inputFocused),
          (validationError ? styles.inputError : null),
        ]}
        {...rest} />

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
