import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingTop: Layout.Spacing.MD,
    paddingHorizontal: Layout.Spacing.MD,
  },
  container: {
    backgroundColor: Colors.Light.CardColor,
    width: '100%',
    borderRadius: Layout.BorderRadius.SM,
    paddingVertical: Layout.Spacing.SM,
    paddingHorizontal: Layout.Spacing.SM,
    elevation: 5,
    shadowColor: Colors.Light.ShadowColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginHorizontal: Layout.Spacing.SM,
    fontFamily: Fonts.Family.Regular,
    padding: 0,
    margin: 0,
    color: Colors.System.Brand,
  },
  clearIcon: {

  },
});
