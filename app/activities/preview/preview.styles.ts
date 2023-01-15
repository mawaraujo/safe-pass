import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../res';

export default StyleSheet.create({
  main: {
    paddingHorizontal: Layout.Spacing.MD,
  },
  card: {
    backgroundColor: Colors.Light.CardColor,
    shadowColor: Colors.Light.ShadowColor,
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.MD,
    width: '100%',
    marginBottom: Layout.Spacing.MD,
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
    color: Colors.System.Black,
  },
  textValue: {
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
