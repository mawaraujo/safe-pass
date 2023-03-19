import { StyleSheet } from 'react-native';
import { Layout } from '../../res';

export default StyleSheet.create({
  container: {
    marginBottom: Layout.Spacing.XS,
    paddingVertical: Layout.Spacing.SM,
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
