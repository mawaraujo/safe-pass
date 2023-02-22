import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './clipboardButton.styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../../../res';

interface Props {
  onCopy: (value: string) => void,
  item?: string,
}

export default function ClipboardButton({ onCopy, item }: Props) {
  const [copied, setCopied] = React.useState<boolean>(false);

  const iconName = React.useMemo(() => (copied ? 'checkmark-outline' : 'clipboard-outline'), [copied]);

  const handlePress = React.useCallback(() => {
    if (!item) {
      return;
    }

    onCopy(item);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }, [item]);

  return (
    <TouchableOpacity
      style={[
        styles.actionButton,
        copied && {
          backgroundColor: Colors.System.Success,
        },
      ]}
      onPress={handlePress}>

      <Icon
        color={Colors.System.White}
        name={iconName}
        size={20} />
    </TouchableOpacity>
  );
}
