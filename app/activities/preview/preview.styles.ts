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
    color: Colors.System.Black,
  },
  textValue: {
    fontFamily: Fonts.Family.Regular,
  },
  left: {
    flex: 1,
    marginRight: Layout.Spacing.MD,
  },
  buttonMarginBottom: {
    marginBottom: Layout.Spacing.XS,
  },
  deleteButton: {
    backgroundColor: Colors.System.Danger,
  },
});
