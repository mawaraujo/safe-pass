import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../res';

export default StyleSheet.create({
  main: {
    paddingHorizontal: Layout.Spacing.MD,
  },
  title: {
    marginBottom: Layout.Spacing.MD,
  },
  navActions: {
    flexDirection: 'row',
    gap: Layout.Spacing.MD,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardRowMarginBottom: {
    marginBottom: Layout.Spacing.MD,
  },
  textLabel: {
    color: Colors.System.Brand,
  },
  textValue: {
    color: Colors.Light.Muted,
  },
  left: {
    flex: 1,
    marginRight: Layout.Spacing.MD,
  },
  actionButton: {
    backgroundColor: Colors.System.Brand,
    borderRadius: Layout.BorderRadius.PILL,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
