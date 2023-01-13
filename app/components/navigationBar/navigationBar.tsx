import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './navigationBar.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../../utils/navigation';
import {Fonts, Colors} from '../../res';

interface INavigationBarProps {
  name?: string,
  showBackIcon?: boolean
}

export default function NavigationBar({name, showBackIcon = true}: INavigationBarProps) {
  const handlePressBack = () => {
    Navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        { showBackIcon && (
          <TouchableOpacity
            onPress={handlePressBack}>

            <Icon
              name="arrow-back-outline"
              color={Colors.System.Brand}
              size={Fonts.Size.LG} />
          </TouchableOpacity>
        )}

        { name && (
          <Text style={styles.name}>{name}</Text>
        )}
      </View>
    </View>
  );
}
