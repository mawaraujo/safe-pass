import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../../res';

export default StyleSheet.create({
  actionButton: {
    backgroundColor: Colors.System.Brand,
    borderRadius: Layout.BorderRadius.PILL,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
