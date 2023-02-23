import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    marginBottom: Layout.Spacing.MD,
  },
  label: {
    marginBottom: Layout.Spacing.SM,
    fontFamily: Fonts.Family.Regular,
    color: Colors.System.Brand,
  },
  errorMessage: {
    color: 'red',
    marginTop: Layout.Spacing.XS,
    fontSize: Fonts.Size.XS,
    fontFamily: Fonts.Family.Regular,
  },
  input: {
    backgroundColor: Colors.Light.CardColor,
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.SM,
    elevation: 5,
    shadowColor: Colors.Light.ShadowColor,
    borderWidth: 3,
    borderColor: 'transparent',
    fontFamily: Fonts.Family.Regular,
    color: Colors.System.Brand,
  },
  inputFocused: {
    borderColor: Colors.System.BrandTransparent,
  },
  inputError: {
    borderColor: Colors.System.DangerTransparent,
  },
  results: {
    position: 'relative',
    maxHeight: 300,
  },
  resultsScroll: {
    gap: 10,
  },
  resultsItem: {
    paddingVertical: Layout.Spacing.XS,
  },
  resultsItemText: {
    color: Colors.System.Brand,
    fontFamily: Fonts.Family.Regular,
  },
});
