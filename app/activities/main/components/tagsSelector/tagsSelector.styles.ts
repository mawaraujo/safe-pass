import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../../../res';

export default StyleSheet.create({
  main: { },
  container: {
    gap: Layout.Spacing.MD,
    paddingBottom: Layout.Spacing.MD,
  },
  card: {
    backgroundColor: Colors.Light.CardColor,
    paddingHorizontal: Layout.Spacing.MD,
    paddingVertical: Layout.Spacing.SM,
    borderRadius: Layout.BorderRadius.SM,
    shadowColor: Colors.Light.ShadowColor,
    elevation: 5,
  },
  selectedCard: {
    backgroundColor: Colors.System.Brand,
  },
  cardTitle: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
  },
  selectedCardTitle: {
    color: Colors.System.White,
    fontFamily: Fonts.Family.SemiBold,
  },
});
