import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../../res';

export default StyleSheet.create({
  title: {
    fontSize: Fonts.Size.MD,
    color: Colors.System.Black,
    textAlign: 'center',
    fontFamily: Fonts.Family.Regular,
  },
  extraInformation: {
    textAlign: 'center',
    marginTop: Layout.Spacing.XS,
    fontFamily: Fonts.Family.Regular,
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
