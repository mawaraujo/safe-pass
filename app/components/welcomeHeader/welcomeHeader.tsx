import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import styles from './welcomeHeader.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts, Screens } from '../../res';
import { Navigation } from '../../utils';
import Title from '../title/title';
import Text from '../text/text';

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
        <Text
          size="3"
          style={styles.title}>
          {props.title}
        </Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity onPress={goToSettings}>
          <Icon
            name="settings-outline"
            color={Colors.System.White}
            size={Fonts.Size.Icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
