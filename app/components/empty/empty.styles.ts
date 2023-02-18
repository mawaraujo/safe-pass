import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: Fonts.Size.LG,
    marginTop: Layout.Spacing.SM,
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
  },
  buttonContainer: {

  },
  image: {
    width: '100%',
    height: 300,
  },
});
