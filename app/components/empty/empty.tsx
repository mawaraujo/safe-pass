import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './empty.styles';
import EmptyListPNG from '../../res/assets/images/empty_list.png';
import Button from '../button/button';

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
      <Image source={EmptyListPNG} style={styles.image} resizeMode="cover" />

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
