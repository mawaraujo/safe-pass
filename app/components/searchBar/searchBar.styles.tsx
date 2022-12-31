import {StyleSheet} from 'react-native';
import {Colors} from '../../res';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Light.CardColor,
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 10,
    elevation: 10,
    shadowColor: Colors.Light.ShadowColor,
  },
  input: {
    width: '100%',
  },
});
