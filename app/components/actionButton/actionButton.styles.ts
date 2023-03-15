import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../res';

export default StyleSheet.create({
  uploadButton: {
    backgroundColor: Colors.System.Brand,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Layout.BorderRadius.PILL,
  },
  selectText: {
    marginTop: Layout.Spacing.MD,
    textAlign: 'center',
  },
});
