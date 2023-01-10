import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Light.CardColor,
    width: '100%',
    borderRadius: Layout.BorderRadius.SM,
    paddingHorizontal: Layout.Spacing.MD,
    elevation: 10,
    shadowColor: Colors.Light.ShadowColor,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  clearIcon: {

  },
});
