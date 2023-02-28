import React, { ReactNode } from 'react';
import { View, TextInput as RNTextInput, TextInputProps } from 'react-native';
import styles from './input.styles';
import { Strings } from '../../utils';
import { Colors } from '../../res';
import Text from '../text/text';

type Props = {
  label?: string,
  validationError?: string,
  textAlignVerticalTop?: boolean,
  rightComponent?: ReactNode
}

export default function Input({
  label,
  validationError,
  textAlignVerticalTop = false,
  rightComponent,
  ...rest
}: Props & TextInputProps) {

  const [focused, setFocused] = React.useState<boolean>(false);

  return (
    <View style={styles.container}>
      {
        label?.length && (
          <Text>{label}</Text>
        )
      }

      <View style={styles.formGroup}>
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

        { rightComponent && rightComponent }
      </View>

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
