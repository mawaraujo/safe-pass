import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    marginBottom: Layout.Spacing.XS,
    paddingVertical: Layout.Spacing.SM,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.System.Brand,
    textTransform: 'capitalize',
    fontFamily: Fonts.Family.Bold,
  },
  left: {
    flex: 1,
    marginLeft: Layout.Spacing.MD,
  },
  extraInfo: {
    fontFamily: Fonts.Family.Regular,
    color: Colors.Light.Muted,
  },
  actions: {
    flexDirection: 'row',
    gap: Layout.Spacing.MD,
  },
});
