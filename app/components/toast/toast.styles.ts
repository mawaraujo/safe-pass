import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: Layout.Spacing.MD,
    paddingVertical: Layout.Spacing.SM,
    zIndex: 10,
    width: '100%',
  },
  toast: {
    padding: Layout.Spacing.MD,
    width: '100%',
    flex: 1,
    borderRadius: Layout.BorderRadius.SM,
    backgroundColor: Colors.Light.CardColor,
    shadowColor: Colors.Light.ShadowColor,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '85%',
  },
  toastTitle: {
    color: Colors.System.White,
    fontFamily: Fonts.Family.Bold,
  },
  toastExtraInformation: {
    fontFamily: Fonts.Family.Regular,
    color: Colors.System.White,
  },
  rightContainer: {

  },
});
