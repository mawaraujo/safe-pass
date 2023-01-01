import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Light.CardColor,
    marginTop: Layout.Spacing.SM,
    borderRadius: Layout.BorderRadius.SM,
    overflow: 'hidden',
    padding: Layout.Spacing.MD,
    elevation: 10,
    shadowColor: Colors.Light.ShadowColor,
  },
  text: {
    textAlign: 'center',
    fontSize: Fonts.Size.MD,
  },
  buttonContainer: {
    marginTop: Layout.Spacing.SM,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
