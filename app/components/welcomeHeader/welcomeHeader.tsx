import React from 'react';
import { View, StatusBar, TouchableOpacity, Text } from 'react-native';
import styles from './welcomeHeader.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Screens } from '../../res';
import { Navigation } from '../../utils';

interface WelcomeHeaderProps {
  title: string,
}

export default function WelcomeHeader(props: WelcomeHeaderProps) {
  const goToSettings = React.useCallback(() => {
    Navigation.navigate(
        Screens.Settings.Name,
    );
  }, []);

  return (
    <View style={[styles.container]}>
      <StatusBar
        backgroundColor={Colors.System.Brand}
        barStyle="light-content" />

      <View style={styles.leftContainer}>
        <Text style={styles.title}>
          { props.title }
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={goToSettings}>
          <Icon
            name="settings-outline"
            color={Colors.System.White}
            size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
