import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    marginBottom: Layout.Spacing.XS,
    paddingVertical: Layout.Spacing.SM,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: '100%',
    height: '100%',
    maxWidth: 30,
    maxHeight: 30,
    marginRight: Layout.Spacing.MD,
  },
  title: {
    color: Colors.System.Brand,
    textTransform: 'capitalize',
    fontFamily: Fonts.Family.Bold,
  },
  left: {
    flex: 1,
  },
  extraInfo: {
    fontFamily: Fonts.Family.Regular,
    color: Colors.Light.Muted,
  },
});
