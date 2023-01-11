import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './alert.styles';
import {Colors} from '../../res';
import Icon from 'react-native-vector-icons/Ionicons';

interface IAlertProps {
  color: 'Success' | 'Danger' | 'Info' | 'Warning',
  title: string,
  description?: string,
  onClose?: () => void
}

export default function Alert({color, title, description, onClose}: IAlertProps) {
  const handleClose = React.useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <View style={[
      styles.container,
      {
        backgroundColor: Colors.System[color],
      },
    ]}>
      <View style={styles.left}>
        <Text style={styles.text}>{title}</Text>

        { description && (
          <Text style={styles.descText}>Lorem ispum dolor it</Text>
        )}
      </View>

      <TouchableOpacity
        onPress={handleClose}
        style={styles.closeButton}>

        <Icon
          name="close-outline"
          size={25}
          color={Colors.System.White} />
      </TouchableOpacity>
    </View>
  );
}
