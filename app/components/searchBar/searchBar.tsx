import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from './searchBar.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts } from '../../res';
import { useTranslation } from 'react-i18next';

interface ISearchBarProps {
  onChangeText: (e: string) => void,
  onClear?: () => void,
  value: string,
}

export default function SearchBar({ onChangeText, onClear, value }: ISearchBarProps) {
  const { t } = useTranslation();

  const placeholderText: string = t('Search');

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
          color={Colors.Light.Muted}
          size={Fonts.Size.MD} />

        <TextInput
          value={value}
          onChangeText={handleChange}
          placeholder={placeholderText}
          placeholderTextColor={Colors.Light.Muted}
          style={styles.input} />

        {
          value?.length > 0 && (
            <TouchableOpacity
              onPress={handleClear}
              style={styles.clearIcon}>

              <Icon
                name="close-outline"
                color={Colors.Light.Muted}
                size={Fonts.Size.MD} />
            </TouchableOpacity>
          )
        }
      </View>
    </View>
  );
}
