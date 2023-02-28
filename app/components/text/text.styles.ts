import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  text: {
    color: Colors.System.Brand,
    fontSize: Fonts.Size.Text,
    marginBottom: Layout.Spacing.XS,
  },
  muted: {
    color: Colors.Light.Muted,
  },
  bold: {
    fontFamily: Fonts.Family.SemiBold,
  },
  small: {
    fontSize: Fonts.Size.Small,
  },
});
