import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../../res';

export default StyleSheet.create({
  title: {
    fontSize: Fonts.Size.Text,
    color: Colors.System.Black,
    textAlign: 'center',
    fontFamily: Fonts.Family.SemiBold,
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
