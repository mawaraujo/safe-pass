import {StyleSheet} from 'react-native';
import {Fonts, Layout} from '../../res';

export default StyleSheet.create({
  main: {
    flex: 1,

  },
  mainScrollView: {
    margin: Layout.Spacing.SM,
  },
  title: {
    marginTop: Layout.Spacing.MD,
    marginBottom: Layout.Spacing.SM,
    fontSize: Fonts.Size.MD,
  },
});
