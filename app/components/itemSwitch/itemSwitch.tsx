import React from 'react';
import {View, Text, Switch} from 'react-native';
import {Colors} from '../../res';
import itemSwitchStyles from './itemSwitch.styles';

interface ItemSwitchProps {
  title: string,
  description?: string,
  onChange?: (value: boolean) => void,
  value?: boolean,

  /** When this flag is true, the margin-top of the item is removed  */
  firstItem?: boolean,
}

export default function ItemSwitch({title, description, onChange, firstItem = false, value}: ItemSwitchProps) {

  const handleToggle = (): void => {
    onChange?.(!value);
  };

  return (
    <View
      style={[
        itemSwitchStyles.container,
        firstItem && itemSwitchStyles.removeMargin,
      ]}>
      <View style={itemSwitchStyles.leftContainer}>
        <Text style={itemSwitchStyles.title}>{title && title}</Text>

        { description && (
          <Text style={itemSwitchStyles.description}>
            {description}
          </Text>
        )}
      </View>

      <Switch
        trackColor={{
          false: Colors.System.BrandTransparent,
          true: Colors.System.BrandTransparent,
        }}
        thumbColor={value ? Colors.System.Brand : '#f4f3f4'}
        onValueChange={handleToggle}
        value={value}
      />
    </View>
  );
}
