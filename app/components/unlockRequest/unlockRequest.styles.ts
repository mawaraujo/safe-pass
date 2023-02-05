import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Light.BackgroundColor,
    zIndex: 10,
    paddingHorizontal: Layout.Spacing.MD,
  },
  title: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.SemiBold,
    fontSize: Fonts.Size.LG,
    marginTop: Layout.Spacing.MD,
    marginBottom: Layout.Spacing.XS,
    textAlign: 'center',
  },
  subTitle: {
    color: Colors.Light.Muted,
    fontFamily: Fonts.Family.SemiBold,
    fontSize: Fonts.Size.MD,
    marginBottom: Layout.Spacing.MD,
    textAlign: 'center',
  },
});
