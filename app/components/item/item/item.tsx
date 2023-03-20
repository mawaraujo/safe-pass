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
}

export default function Item({ title, description, onPress, isLink }: ItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={itemSelectorStyles.container}>

      <View style={itemSelectorStyles.leftContainer}>
        <Text size="2">{title && title}</Text>

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
