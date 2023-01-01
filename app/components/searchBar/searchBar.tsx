import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './searchBar.styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface ISearchBarProps {
  onChange: (e: string) => void,
}

export default function SearchBar({onChange}: ISearchBarProps) {
  const handleChange = (e: string): void => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={16} />

      <TextInput
        onChangeText={handleChange}
        placeholder="Search password"
        style={styles.input} />
    </View>
  );
}
