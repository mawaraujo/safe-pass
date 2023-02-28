import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../res';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Layout.Spacing.MD,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.System.Brand,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Layout.BorderRadius.PILL,
  },
});
