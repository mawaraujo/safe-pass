import { StyleSheet } from 'react-native';
import { Colors, Fonts, Layout } from '../../../../res';

export default StyleSheet.create({
  picker: {
    flex: 1,
    width: '100%',
    borderRadius: 100,
    backgroundColor: Colors.Light.BackgroundColor,
    marginTop: Layout.Spacing.XS,
    paddingVertical: 5,
  },
  pickerItem: {
    fontFamily: Fonts.Family.Regular,
    fontSize: Fonts.Size.REGULAR,
  },
});
