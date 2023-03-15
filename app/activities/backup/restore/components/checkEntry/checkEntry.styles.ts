import { StyleSheet } from 'react-native';
import { Layout } from '../../../../../res';

export default StyleSheet.create({
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContentText: {
    flexDirection: 'column',
    marginLeft: Layout.Spacing.SM,
  },
  checkboxDisabled: {
    opacity: 0.1,
  },
  checkbox: {
    transform: [{ scale: 1.2 }],
  },
});
