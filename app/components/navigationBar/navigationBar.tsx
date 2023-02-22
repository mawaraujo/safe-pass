import React, { ReactNode } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './navigationBar.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../../utils/navigation';
import { Fonts, Colors } from '../../res';

interface INavigationBarProps {
  name?: string,
  showBackIcon?: boolean,
  children?: ReactNode
}

export default function NavigationBar({ name, showBackIcon = true, children }: INavigationBarProps) {
  const handlePressBack = () => {
    Navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={
          showBackIcon
            ? handlePressBack
            : undefined
        }
        style={styles.left}>

        { showBackIcon && (
          <Icon
            name="arrow-back-outline"
            color={Colors.System.Brand}
            size={Fonts.Size.XL} />
        )}

        { name && (
          <Text style={styles.name}>{name}</Text>
        )}
      </TouchableOpacity>

      {
        children && children
      }
    </View>
  );
}
