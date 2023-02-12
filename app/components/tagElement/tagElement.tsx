import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { NTag } from '../../types';
import styles from './tagElement.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../res';

interface ITagElementProps {
  item: NTag.Tag,
  count?: number,
}

export default function TagElement({ item, count }: ITagElementProps) {

  return (
    <View
      style={styles.container}>
      <Icon
        name="pricetag-outline"
        color={Colors.System.Brand}
        size={26} />

      <View style={styles.left}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.extraInfo}>Contains {count} passwords</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon
            name="create-outline"
            color={Colors.System.Brand}
            size={26} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icon
            name="trash-outline"
            color={Colors.System.Brand}
            size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
