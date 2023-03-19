import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../res';

export default StyleSheet.create({
  hide: {
    display: 'none',
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Layout.Spacing.XL,
    borderTopWidth: 0.5,
    borderTopColor: Colors.Light.Muted,
    backgroundColor: Colors.Light.CardColor,
    paddingVertical: 8,
    position: 'relative',
    elevation: 5,
    shadowColor: Colors.Light.ShadowColor,
  },
  buttonContainer: {
    borderRadius: Layout.BorderRadius.PILL,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    backgroundColor: Colors.System.Brand,
  },
  buttonDisabled: {
    backgroundColor: Colors.System.BrandTransparent,
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.System.Brand,
  },
});
