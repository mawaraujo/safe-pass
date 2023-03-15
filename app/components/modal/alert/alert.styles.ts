import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../res';

export default StyleSheet.create({
  container: {
    gap: Layout.Spacing.SM,
    marginBottom: Layout.Spacing.SM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.System.Brand,
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
