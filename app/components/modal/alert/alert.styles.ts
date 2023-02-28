import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../../res';

export default StyleSheet.create({
  container: {
    gap: Layout.Spacing.SM,
    marginBottom: Layout.Spacing.SM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.SemiBold,
    fontSize: Fonts.Size.Text,
    marginBottom: Layout.Spacing.MD,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: Colors.System.Brand,
  },
});
