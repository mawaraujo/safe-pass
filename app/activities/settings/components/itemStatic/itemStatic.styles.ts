import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../../../res';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: Layout.Spacing.MD,
  },
  removeMargin: {
    marginTop: 0,
  },
  title: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
  },
  description: {
    fontFamily: Fonts.Family.Regular,
    fontSize: Fonts.Size.XS,
  },
});
