import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../../res';

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Layout.Spacing.MD,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: Colors.Light.CardColor,
    width: '100%',
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.MD,
  },
});
