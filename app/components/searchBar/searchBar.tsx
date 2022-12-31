import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './searchBar.styles';

export default function SearchBar() {
  const [value, setValue] = React.useState<string>('');

  const handleChange = (e: string): void => {
    setValue(e);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder="Search password"
        style={styles.input} />
    </View>
  );
}
