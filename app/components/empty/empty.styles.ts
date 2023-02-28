import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
    marginTop: Layout.Spacing.XL,
  },
  text: {
    textAlign: 'center',
    fontSize: Fonts.Size.Title,
    marginTop: Layout.Spacing.SM,
    color: Colors.System.Brand,
  },
  buttonContainer: {

  },
  image: {
    width: '100%',
    height: 300,
  },
});
