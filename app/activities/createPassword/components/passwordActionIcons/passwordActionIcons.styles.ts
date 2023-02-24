import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../../res';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Layout.Spacing.MD,
    marginLeft: Layout.Spacing.MD,
  },
  actionButton: {
    borderRadius: Layout.BorderRadius.PILL,
    backgroundColor: Colors.Light.CardColor,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: Colors.Light.ShadowColor,
  },
});
