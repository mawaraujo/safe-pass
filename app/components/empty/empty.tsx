import React from 'react';
import {View, Text} from 'react-native';
import styles from './empty.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../button/button';
import {Colors} from '../../res';

interface IEmptyProps {
  text?: string,
  actionButtonText?: string,
  onPress?: () => void
}

function Component({text, actionButtonText, onPress}: IEmptyProps) {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return (
    <View style={styles.container}>
      <Icon
        name="key"
        size={100}
        color={Colors.System.Brand} />

      <Text style={styles.text}>
        {text && text}
      </Text>

      {
        actionButtonText && (
          <View style={styles.buttonContainer}>
            <Button
              onPress={handlePress}
              text={actionButtonText ?? 'Add Entry'} />
          </View>
        )
      }
    </View>
  );
}

export default React.memo(
    Component,
    (_prev, _next) => true,
);
