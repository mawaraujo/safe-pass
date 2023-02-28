import React from 'react';
import { View } from 'react-native';
import { Colors, Fonts } from '../../../res';
import itemSelectorStyles from './item.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import Text from '../../../components/text/text';

interface ItemProps {
  title: string,
  description?: string,
  onPress?: () => void,
  isLink?: boolean,

  /** When this flag is true, the margin-top of the item is removed  */
  firstItem?: boolean,
}

export default function Item({ title, description, onPress, isLink, firstItem = false }: ItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        itemSelectorStyles.container,
        firstItem && itemSelectorStyles.removeMargin,
      ]}>
      <View style={itemSelectorStyles.leftContainer}>
        <Text>{title && title}</Text>

        { description && (
          <Text muted>{description}</Text>
        )}
      </View>

      {
        onPress && (
          <Icon
            color={Colors.System.Brand}
            name={isLink ? 'open-outline' : 'chevron-forward-outline'}
            size={Fonts.Size.Icon} />
        )
      }
    </TouchableOpacity>
  );
}
