import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../res';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Layout.Spacing.MD,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    marginHorizontal: Layout.Spacing.MD,
  },
  statusContainer: {
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginBottom: Layout.Spacing.SM,
  },
  subTitle: {
    marginTop: Layout.Spacing.SM,
    marginBottom: Layout.Spacing.MD,
  },
  cardContainer: {
    gap: Layout.Spacing.MD,
  },
  button: {
    backgroundColor: 'transparent',
    marginTop: Layout.Spacing.SM,
    marginBottom: Layout.Spacing.MD,
  },
  buttonText: {
    color: Colors.System.Brand,
  },
  importImage: {
    height: 200,
    marginBottom: Layout.Spacing.LG,
  },
});
