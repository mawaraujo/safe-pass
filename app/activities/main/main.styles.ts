import { StyleSheet } from 'react-native';
import { Layout } from '../../res';

export default StyleSheet.create({
  main: {
    flex: 1,
  },
  mainScrollView: {
    paddingHorizontal: Layout.Spacing.MD,
    paddingTop: Layout.Spacing.MD,
    flex: 1,
  },
  flatList: {
    paddingBottom: Layout.Spacing.LG,
  },
});
