import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import type { NTag } from '../../types';
import styles from './tagElement.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts, Screens } from '../../res';
import { Navigation } from '../../utils';
import { useTranslation } from 'react-i18next';
import Text from '../text/text';

interface ITagElementProps {
  item: NTag.Tag,
  linkedPasswords?: number,
  onPressDelete?: (item: NTag.Tag) => void
}

export default function TagElement({ item, linkedPasswords, onPressDelete }: ITagElementProps) {
  const { t } = useTranslation();

  const handleEdit = React.useCallback(() => {
    Navigation.navigate(
        Screens.CreateTag.Name, {
          tag: item,
        },
    );
  }, [item]);

  const handleDelete = React.useCallback(() => {
    onPressDelete?.(item);
  }, [item]);

  return (
    <View
      style={styles.container}>

      <Icon
        name={
          (linkedPasswords && linkedPasswords > 1)
            ? 'documents-outline'
            : 'document-outline'
        }
        color={Colors.System.Brand}
        size={Fonts.Size.Icon} />

      <View style={styles.left}>
        <Text bold>{item.name}</Text>
        <Text muted>
          {
            t('Contains [n] passwords')
                ?.replace('[n]', String(linkedPasswords))
          }
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={handleEdit}>
          <Icon
            name="create-outline"
            color={Colors.System.Brand}
            size={Fonts.Size.Icon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDelete}>

          <Icon
            name="trash-outline"
            color={Colors.System.Brand}
            size={Fonts.Size.Icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
