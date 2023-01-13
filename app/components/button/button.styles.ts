import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.System.Brand,
    width: 'auto',
    paddingVertical: Layout.Spacing.SM,
    paddingHorizontal: Layout.Spacing.LG,
    borderRadius: Layout.BorderRadius.SM,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
