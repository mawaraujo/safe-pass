import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Light.CardColor,
    elevation: 5,
    shadowColor: Colors.Light.ShadowColor,
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.MD,
    width: '100%',
    marginBottom: Layout.Spacing.MD,
  },
});
