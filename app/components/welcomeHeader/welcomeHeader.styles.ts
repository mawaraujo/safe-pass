import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: Layout.Spacing.MD,
    backgroundColor: Colors.System.Brand,
    shadowColor: Colors.Light.ShadowColor,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {

  },
  text: {
    color: Colors.System.WhiteTransparent,
    fontFamily: Fonts.Family.Regular,
  },
  title: {
    fontFamily: Fonts.Family.SemiBold,
    color: Colors.System.White,
    fontSize: Fonts.Size.LG,
  },
  rightContainer: {

  },
});
