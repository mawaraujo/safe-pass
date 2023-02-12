import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Layout.Spacing.MD,
  },
  sectionTitle: {
    fontSize: Fonts.Size.MD,
    fontFamily: Fonts.Family.Regular,
    marginBottom: Layout.Spacing.XS,
    color: Colors.System.Brand,
  },
  appVersion: {
    textAlign: 'center',
    fontFamily: Fonts.Family.Regular,
  },
});
