import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../../res';

export default StyleSheet.create({
  main: {
    // marginHorizontal: Layout.Spacing.MD,
    marginBottom: Layout.Spacing.MD,
  },
  container: {
    gap: Layout.Spacing.MD,
  },
  card: {
    backgroundColor: Colors.Light.CardColor,
    paddingHorizontal: Layout.Spacing.MD,
    paddingVertical: Layout.Spacing.SM,
    borderRadius: Layout.BorderRadius.SM,
    shadowColor: Colors.Light.ShadowColor,
    elevation: 10,
  },
  selectedCard: {
    backgroundColor: Colors.System.Brand,
  },
  title: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
    marginBottom: Layout.Spacing.XS,
  },
  cardTitle: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
  },
  selectedCardTitle: {
    color: Colors.System.White,
  },
});
