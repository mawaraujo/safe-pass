import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../../../res';
import itemSelectorStyles from './itemSelector.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

interface ItemSelectorProps {
  title: string,
  description?: string,
  onPress?: (value: boolean) => void,

  /** When this flag is true, the margin-top of the item is removed  */
  firstItem?: boolean,
}

export default function ItemSelector({title, description, onPress, firstItem = false}: ItemSelectorProps) {
  return (
    <TouchableOpacity
      style={[
        itemSelectorStyles.container,
        firstItem && itemSelectorStyles.removeMargin,
      ]}>
      <View style={itemSelectorStyles.leftContainer}>
        <Text style={itemSelectorStyles.title}>{title && title}</Text>

        { description && (
          <Text style={itemSelectorStyles.description}>
            {description}
          </Text>
        )}
      </View>

      <Icon
        color={Colors.System.Brand}
        name="chevron-forward-outline"
        size={26} />
    </TouchableOpacity>
  );
}
