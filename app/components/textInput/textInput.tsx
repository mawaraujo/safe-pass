import React from 'react';
import {View, Text, TextInput as RNTextInput, TextInputProps} from 'react-native';
import styles from './textInput.styles';
import {Strings} from '../../utils';

type ITextInputProps = {
  label?: string,
  validationError?: string,
}

type ExtendedITextInputProps = ITextInputProps & TextInputProps

export default function TextInput({label, validationError, ...rest}: ExtendedITextInputProps) {

  return (
    <View style={styles.container}>
      {
        label?.length && (
          <Text style={styles.label}>{label}</Text>
        )
      }

      <RNTextInput
        style={styles.input}
        {...rest} />

      {
        (validationError && validationError?.length > 0) && (
          <Text style={styles.inputError}>
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
