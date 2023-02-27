import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../res';

export default StyleSheet.create({
  text: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
    fontSize: Fonts.Size.REGULAR,
  },
  muted: {
    color: Colors.Light.Muted,
  },
  bold: {
    fontFamily: Fonts.Family.SemiBold,
  },
});
