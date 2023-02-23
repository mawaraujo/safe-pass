import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './inputAutocomplete.styles';

interface Props {
  values: Array<string>,
  onChange?: (val: string) => void
}

export default function Results({ values, onChange }: Props) {
  if (values.length <= 0) {
    return (
      null
    );
  }

  return (
    <View
      style={[
        styles.input,
        styles.results,
      ]}>

      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.resultsScroll}>

        {
          values.slice(0, 4).map((val) => (
            <TouchableOpacity
              style={styles.resultsItem}
              onPress={() => onChange?.(val)}
              key={val}>

              <Text
                style={styles.resultsItemText}>
                {val}
              </Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
}
