import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.System.Danger,
    width: '100%',
    padding: Layout.Spacing.XS,
  },
  text: {
    fontFamily: Fonts.Family.Regular,
    color: Colors.System.White,
    textAlign: 'center',
  },
});
