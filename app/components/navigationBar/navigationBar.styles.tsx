import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: Layout.Spacing.MD,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: Colors.System.Brand,
    fontSize: Fonts.Size.MD,
    marginLeft: Layout.Spacing.SM,
  },
});
