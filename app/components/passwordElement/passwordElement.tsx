import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import type { NPassword } from '../../types';
import styles from './passwordElement.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts } from '../../res';
import { useTranslation } from 'react-i18next';
import { Strings } from '../../utils';
import Text from '../text/text';

interface IPasswordElementProps {
  item: NPassword.Password,
  onPress?: (password: NPassword.Password) => void
}

export default function PasswordElement({ item, onPress }: IPasswordElementProps) {
  const { t } = useTranslation();
  const [loadImageError, setLoadImageError] = React.useState(false);

  const handlePress = (): void => onPress?.(item);
  const handleLoadImageError = (val: boolean = true) => setLoadImageError(val);

  const parsedUrl: string = React.useMemo(() => (
    Strings.addHttps(item.url)
  ), [item.url]);

  React.useEffect(() => handleLoadImageError(false), [item.url]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}>

      {
        !loadImageError && (
          <Image
            resizeMode="contain"
            source={{
              uri: `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${parsedUrl}&size=256`,
            }}
            onError={() => handleLoadImageError()}
            style={styles.logo} />
        )
      }

      {
        loadImageError && (
          <Icon
            style={styles.icon}
            name="earth-outline"
            size={Fonts.Size.Icon}
            color={Colors.System.Brand} />
        )
      }

      <View style={styles.left}>
        <Text size="2" bold>{item.name}</Text>

        { item.username && (
          <Text muted>
            {item.username}
          </Text>
        )}

        { !item.username && item.email && (
          <Text muted>
            {item.email}
          </Text>
        )}

        {
          !item.username && !item.email && (
            <Text muted>
              {t('NoInformation').toString()}
            </Text>
          )
        }
      </View>

      <Icon
        name="chevron-forward-outline"
        color={Colors.System.Brand}
        size={Fonts.Size.Icon} />
    </TouchableOpacity>
  );
}
