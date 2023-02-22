import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../../res';

export default StyleSheet.create({
  title: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.SemiBold,
    fontSize: Fonts.Size.MD,
    marginBottom: Layout.Spacing.MD,
  },
  container: {
    gap: Layout.Spacing.SM,
    marginBottom: Layout.Spacing.SM,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Layout.Spacing.MD,
  },
  buttonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  border: {
    borderColor: Colors.System.BrandTransparent,
    borderWidth: 0.5,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
    marginLeft: Layout.Spacing.MD,
  },
  actionButton: {

  },
});
