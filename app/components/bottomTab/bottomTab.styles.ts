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
    backgroundColor: Colors.Light.CardColor,
    paddingVertical: 8,
    position: 'relative',
    elevation: 10,
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
  button: {
    borderWidth: 1,
    borderColor: Colors.System.Brand,
  },
});
