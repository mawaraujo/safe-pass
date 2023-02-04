import React from 'react';
import {View, Text} from 'react-native';
import itemStaticStyles from './itemStatic.styles';

interface ItemStaticProps {
  title: string,
  description?: string,

  /** When this flag is true, the margin-top of the item is removed  */
  firstItem?: boolean,
}

export default function ItemStatic({title, description, firstItem = false}: ItemStaticProps) {
  return (
    <View
      style={[
        itemStaticStyles.container,
        firstItem && itemStaticStyles.removeMargin,
      ]}>

      <Text style={itemStaticStyles.title}>{title && title}</Text>

      { description && (
        <Text style={itemStaticStyles.description}>
          {description}
        </Text>
      )}
    </View>
  );
}
