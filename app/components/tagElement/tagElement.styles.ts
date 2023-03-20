import { StyleSheet } from 'react-native';
import { Layout } from '../../res';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    gap: Layout.Spacing.MD,
  },
});
