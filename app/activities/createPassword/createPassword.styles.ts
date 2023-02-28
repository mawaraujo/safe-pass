import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    paddingHorizontal: Layout.Spacing.MD,
    paddingBottom: Layout.Spacing.MD,
  },
  picker: {
    backgroundColor: Colors.Light.CardColor,
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.SM,
    elevation: 5,
    shadowColor: Colors.Light.ShadowColor,
    borderWidth: 3,
    borderColor: 'transparent',
    color: Colors.System.Brand,
  },
});
