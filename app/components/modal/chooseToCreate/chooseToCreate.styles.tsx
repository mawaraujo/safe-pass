import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../../res';

export default StyleSheet.create({
  title: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.SemiBold,
    fontSize: Fonts.Size.MD,
    marginBottom: Layout.Spacing.SM,
  },
  container: {
    gap: Layout.Spacing.SM,
    marginBottom: Layout.Spacing.SM,
  },
  cancelButton: {
    backgroundColor: 'transparent',
  },
  cancelButtonText: {
    color: Colors.System.Brand,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.System.BrandTransparent,
    borderWidth: 1,
    padding: Layout.Spacing.SM,
    borderRadius: Layout.BorderRadius.SM,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
    marginTop: Layout.Spacing.XS,
    marginLeft: Layout.Spacing.MD,
  },
});
