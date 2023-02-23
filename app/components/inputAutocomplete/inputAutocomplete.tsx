import React from 'react';
import { View, Text, TextInput as RNTextInput, TextInputProps } from 'react-native';
import styles from './inputAutocomplete.styles';
import { Strings } from '../../utils';
import { Colors } from '../../res';
import Results from './results';

type Props = {
  label?: string,
  validationError?: string,
  autoCompleteList?: Array<string>
}

type ExtendedProps = Props & TextInputProps

export default function InputAutocomplete({ label, validationError, autoCompleteList = [], ...rest }: ExtendedProps) {
  const [focused, setFocused] = React.useState<boolean>(false);
  const [autoCompleteValues, setAutoCompleteValues] = React.useState<Array<string>>([]);

  const onChange = React.useCallback(() => {
    if (!autoCompleteList) {
      return;
    }

    const newList = autoCompleteList.filter((val) => val.toLowerCase().includes(rest.value ?? ''));
    setAutoCompleteValues(newList);

  }, [
    rest?.value,
    autoCompleteList,
    autoCompleteValues,
    setAutoCompleteValues,
  ]);

  const onSelectAutoCompleteValue = React.useCallback((val: string) => {
    rest?.onChangeText?.(val);

    setTimeout(() => {
      setAutoCompleteValues([]);
    }, 100);
  }, [rest?.onChangeText]);

  React.useEffect(() => {
    onChange();
  }, [rest?.value]);

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
          (focused && styles.inputFocused),
          (validationError ? styles.inputError : null),
        ]}
        {...rest} />

      {
        focused && autoCompleteValues.length > 0 && (
          <Results
            values={autoCompleteValues}
            onChange={onSelectAutoCompleteValue} />
        )
      }

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
