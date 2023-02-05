import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../res';

export default StyleSheet.create({
  main: {
    paddingHorizontal: Layout.Spacing.MD,
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
    fontFamily: Fonts.Family.Regular,
    color: Colors.System.Brand,
  },
  textValue: {
    fontFamily: Fonts.Family.Regular,
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
  buttonMarginBottom: {
    marginBottom: Layout.Spacing.XS,
  },
  deleteButton: {
    backgroundColor: Colors.System.Danger,
  },
});
