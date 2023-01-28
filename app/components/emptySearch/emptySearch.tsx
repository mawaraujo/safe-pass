import React from 'react';
import {View, Text} from 'react-native';
import styles from './emptySearch.styles';

export default function EmptySearch() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search not found</Text>
    </View>
  );
}
