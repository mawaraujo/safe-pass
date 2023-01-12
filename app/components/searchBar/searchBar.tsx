import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import styles from './searchBar.styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface ISearchBarProps {
  onChangeText: (e: string) => void,
  onClear?: () => void,
  value: string,
}

export default function SearchBar({onChangeText, onClear, value}: ISearchBarProps) {
  const handleChange = (e: string): void => {
    if (onChangeText) {
      onChangeText(e);
    }
  };

  const handleClear = (): void =>{
    if (onClear) {
      onClear();
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Icon
          name="search"
          size={16} />

        <TextInput
          value={value}
          onChangeText={handleChange}
          placeholder="Search password"
          style={styles.input} />

        {
          value?.length > 0 && (
            <TouchableOpacity
              onPress={handleClear}
              style={styles.clearIcon}>

              <Icon
                name="close-outline"
                size={20} />
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
}
