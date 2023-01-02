import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: Layout.Spacing.MD,
    backgroundColor: Colors.System.Brand,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: Colors.System.White,
    fontSize: Fonts.Size.MD,
    marginLeft: Layout.Spacing.SM,
  },
});
