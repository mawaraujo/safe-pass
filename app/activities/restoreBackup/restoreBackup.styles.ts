import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: Layout.Spacing.MD,
  },
  statusContainer: {
    paddingHorizontal: Layout.Spacing.MD,
    alignItems: 'center',
  },
  icon: {
    marginBottom: Layout.Spacing.SM,
  },
  title: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
    fontSize: Fonts.Size.Title,
    textAlign: 'center',
    marginBottom: Layout.Spacing.MD,
  },
});
