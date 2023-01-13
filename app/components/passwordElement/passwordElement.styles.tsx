import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    marginBottom: Layout.Spacing.XS,
    paddingVertical: Layout.Spacing.SM,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: '100%',
    height: '100%',
    maxWidth: 30,
    maxHeight: 30,
    marginRight: Layout.Spacing.MD,
  },
  title: {
    color: Colors.System.Brand,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  left: {
    flex: 1,
  },
});
