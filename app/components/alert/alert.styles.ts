import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'green',
    zIndex: 2,
    padding: Layout.Spacing.MD,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 1,
  },
  text: {
    color: Colors.System.White,
    fontSize: Fonts.Size.MD,
    marginBottom: Layout.Spacing.XS,
  },
  descText: {
    color: Colors.System.White,
  },
  closeButton: {
    borderColor: Colors.System.WhiteTransparent,
    borderWidth: 1,
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
