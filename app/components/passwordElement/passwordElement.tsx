import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import type {NPassword} from '../../types';
import styles from './passwordElement.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import DefaultImage from '../../res/assets/images/key.png';

interface IPasswordElementProps {
  item: NPassword.Password,
  onPress?: (password: NPassword.Password) => void
}

export default function PasswordElement({item, onPress}: IPasswordElementProps) {
  const [loadImageError, setLoadImageError] = React.useState(false);

  const handlePress = (): void => {
    if (onPress) {
      onPress(item);
    }
  };

  const handleLoadImageError = (e: any) => {
    setLoadImageError(true);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}>

      <Image
        resizeMode="contain"
        source={
          !loadImageError ?
          {
            uri: `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=256`,
            cache: 'only-if-cached',
          } :
          DefaultImage
        }
        onError={handleLoadImageError}
        style={styles.logo} />

      <View style={styles.left}>
        <Text style={styles.title}>{item.name}</Text>

        { item.username && !item.email && (
          <Text>{item.username}</Text>
        )}

        { !item.username && item.email && (
          <Text>{item.email}</Text>
        )}

        {
          !item.username && !item.email && (
            <Text>Empty username</Text>
          )
        }
      </View>

      <Icon
        name="chevron-forward-outline"
        size={26} />
    </TouchableOpacity>
  );
}
