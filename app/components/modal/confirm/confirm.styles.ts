import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../res';

export default StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  extraInformation: {
    textAlign: 'center',
    marginTop: Layout.Spacing.XS,
    color: Colors.System.Brand,
  },
  acceptButton: {
    marginTop: Layout.Spacing.LG,
  },
  cancelButton: {
    marginTop: Layout.Spacing.XS,
    backgroundColor: 'transparent',
  },
  cancelButtonText: {
    color: Colors.System.Brand,
  },
});
