import {StyleSheet} from 'react-native';
import {Colors, Layout} from '../../res';

export default StyleSheet.create({
  container: {
    marginBottom: Layout.Spacing.MD,
  },
  label: {
    marginBottom: Layout.Spacing.SM,
  },
  errorMessage: {
    color: 'red',
    marginTop: Layout.Spacing.SM,
  },
  input: {
    backgroundColor: Colors.Light.CardColor,
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.SM,
    elevation: 5,
    shadowColor: Colors.Light.ShadowColor,
    borderWidth: 3,
    borderColor: 'transparent',
  },
  inputFocused: {
    borderColor: Colors.System.BrandTransparent,
  },
  inputError: {
    borderColor: Colors.System.DangerTransparent,
  },
  textAlignVerticalTop: {
    textAlignVertical: 'top',
  },
});
