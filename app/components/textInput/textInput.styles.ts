import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    marginBottom: Layout.Spacing.MD,
  },
  label: {
    marginBottom: Layout.Spacing.SM,
  },
  inputError: {
    color: 'red',
    marginTop: Layout.Spacing.SM,
  },
  input: {
    backgroundColor: Colors.Light.CardColor,
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.SM,
  },
});
