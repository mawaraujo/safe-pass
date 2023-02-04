import React from 'react';
import {View, Text, TextInput as RNTextInput, TextInputProps} from 'react-native';
import styles from './textInput.styles';
import {Strings} from '../../utils';
import {Colors} from '../../res';

type ITextInputProps = {
  label?: string,
  validationError?: string,
  textAlignVerticalTop?: boolean,
}

type ExtendedITextInputProps = ITextInputProps & TextInputProps

export default function TextInput({
  label,
  validationError,
  textAlignVerticalTop = false,
  ...rest
}: ExtendedITextInputProps) {

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
