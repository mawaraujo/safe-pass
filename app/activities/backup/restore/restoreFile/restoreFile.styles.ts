import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../../res';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Layout.Spacing.MD,
    justifyContent: 'center',
  },
  statusContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContentText: {
    flexDirection: 'column',
    marginLeft: Layout.Spacing.SM,
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
  checkboxDisabled: {
    opacity: 0.1,
  },
});
