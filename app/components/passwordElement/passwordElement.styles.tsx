import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Light.CardColor,
    marginBottom: Layout.Spacing.SM,
    elevation: 10,
    shadowColor: Colors.Light.ShadowColor,
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.SM,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.System.Black,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  left: {
    flex: 1,
  },
});
