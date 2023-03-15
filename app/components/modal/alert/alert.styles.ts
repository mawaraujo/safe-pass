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
    textAlign: 'center',
  },
  extraInformation: {
    textAlign: 'center',
  },
  button: {
    marginTop: Layout.Spacing.MD,
    width: '100%',
  },
  buttonText: {
    color: Colors.System.Brand,
  },
});
