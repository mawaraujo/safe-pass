import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../res';

export default StyleSheet.create({
  container: {
    gap: Layout.Spacing.SM,
    marginBottom: Layout.Spacing.SM,
    marginTop: Layout.Spacing.MD,
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
    marginLeft: Layout.Spacing.MD,
  },
  actionButton: {

  },
});
