import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../../res';

export default StyleSheet.create({
  containerTitle: {
    marginHorizontal: Layout.Spacing.MD,
  },
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
  title: {
    marginBottom: Layout.Spacing.MD,
  },
  subTitle: {
    marginBottom: Layout.Spacing.MD,
  },
  cardContainer: {
    gap: Layout.Spacing.MD,
  },
  uploadButton: {
    backgroundColor: Colors.System.Brand,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Layout.BorderRadius.PILL,
  },
  button: {
    backgroundColor: 'transparent',
    marginTop: Layout.Spacing.SM,
    marginBottom: Layout.Spacing.MD,
  },
  buttonText: {
    color: Colors.System.Brand,
  },
  description: {
    marginBottom: Layout.Spacing.MD,
  },
  selectText: {
    marginTop: Layout.Spacing.MD,
  },
});
