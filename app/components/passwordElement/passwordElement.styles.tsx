import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Light.CardColor,
    marginTop: Layout.Spacing.SM,
    elevation: 10,
    shadowColor: Colors.Light.ShadowColor,
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.SM,
  },
});
