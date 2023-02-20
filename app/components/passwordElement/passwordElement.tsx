import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import type { NPassword } from '../../types';
import styles from './passwordElement.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../res';
import { useTranslation } from 'react-i18next';


interface IPasswordElementProps {
  item: NPassword.Password,
  onPress?: (password: NPassword.Password) => void
}

export default function PasswordElement({ item, onPress }: IPasswordElementProps) {
  const { t } = useTranslation();
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

      {
        !loadImageError && (
          <Image
            resizeMode="contain"
            source={{
              uri: `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=256`,
            }}
            onError={handleLoadImageError}
            style={styles.logo} />
        )
      }

      {
        loadImageError && (
          <Icon
            style={styles.icon}
            name="earth-outline"
            size={30}
            color={Colors.System.Brand} />
        )
      }

      <View style={styles.left}>
        <Text style={styles.title}>{item.name}</Text>

        { item.username && (
          <Text style={styles.extraInfo}>
            {item.username}
          </Text>
        )}

        { !item.username && item.email && (
          <Text style={styles.extraInfo}>
            {item.email}
          </Text>
        )}

        {
          !item.username && !item.email && (
            <Text style={styles.extraInfo}>
              {t('NoInformation')}
            </Text>
          )
        }
      </View>

      <Icon
        name="chevron-forward-outline"
        color={Colors.System.Brand}
        size={24} />
    </TouchableOpacity>
  );
}
