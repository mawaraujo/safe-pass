import { StyleSheet } from 'react-native';
import { Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    marginHorizontal: Layout.Spacing.MD,
  },
  title: {
    marginBottom: Layout.Spacing.MD,
  },
  sectionTitle: {
    marginBottom: Layout.Spacing.XS,
  },
  appVersion: {
    textAlign: 'center',
    fontFamily: Fonts.Family.Regular,
  },
});
