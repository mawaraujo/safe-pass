import { StyleSheet } from 'react-native';
import { Colors, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: Layout.Spacing.MD,
    backgroundColor: Colors.System.Brand,
    shadowColor: Colors.Light.ShadowColor,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {

  },
  text: {
    color: Colors.System.WhiteTransparent,
  },
  title: {
    color: Colors.System.White,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Layout.Spacing.MD,
  },
});
