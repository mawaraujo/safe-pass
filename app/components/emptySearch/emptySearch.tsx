import React from 'react';
import {View, Text} from 'react-native';
import styles from './emptySearch.styles';

function EmptySearch() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search not found</Text>
    </View>
  );
}

export default React.memo(EmptySearch, () => true);
