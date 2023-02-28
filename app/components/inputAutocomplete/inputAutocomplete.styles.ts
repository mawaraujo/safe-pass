import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../res';

export default StyleSheet.create({
  container: {
    marginBottom: Layout.Spacing.MD,
  },
  errorMessage: {
    color: 'red',
    marginTop: Layout.Spacing.XS,
    fontSize: Fonts.Size.Small,
  },
  input: {
    marginTop: Layout.Spacing.SM,
    backgroundColor: Colors.Light.CardColor,
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.SM,
    elevation: 5,
    shadowColor: Colors.Light.ShadowColor,
    borderWidth: 3,
    borderColor: 'transparent',
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

  },
});
