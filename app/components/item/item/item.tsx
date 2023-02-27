import React from 'react';
import { View, Text } from 'react-native';
import { Colors, Fonts } from '../../../res';
import itemSelectorStyles from './item.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import SubTitle from '../../../components/subTitle/subTitle';

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
        <SubTitle muted={false}>{title && title}</SubTitle>

        { description && (
          <Text style={itemSelectorStyles.description}>
            {description}
          </Text>
        )}
      </View>

      {
        onPress && (
          <Icon
            color={Colors.System.Brand}
            name={isLink ? 'open-outline' : 'chevron-forward-outline'}
            size={Fonts.Size.XL} />
        )
      }
    </TouchableOpacity>
  );
}
