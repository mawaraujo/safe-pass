import { StyleSheet } from 'react-native';
import { Layout } from '../../res';

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
  importImage: {
    height: 200,
    marginBottom: Layout.Spacing.LG,
  },
});
