import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.Light.BackgroundColor,
    zIndex: 10,
    padding: Layout.Spacing.MD,
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.SemiBold,
    fontSize: Fonts.Size.LG,
    marginTop: Layout.Spacing.MD,
    marginBottom: Layout.Spacing.MD,
    textAlign: 'center',
  },
});
