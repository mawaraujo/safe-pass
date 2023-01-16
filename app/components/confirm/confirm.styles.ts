import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../res';

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Layout.Spacing.MD,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  confirm: {
    backgroundColor: Colors.Light.CardColor,
    width: '100%',
    borderRadius: Layout.BorderRadius.SM,
    padding: Layout.Spacing.MD,
  },
  title: {
    fontSize: Fonts.Size.MD,
    color: Colors.System.Black,
    textAlign: 'center',
  },
  extraInformation: {
    textAlign: 'center',
    marginTop: Layout.Spacing.XS,
  },
  acceptButton: {
    marginTop: Layout.Spacing.LG,
  },
  cancelButton: {
    marginTop: Layout.Spacing.XS,
    backgroundColor: 'transparent',
  },
  cancelButtonText: {
    color: Colors.System.Brand,
  },
});
