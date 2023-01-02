import {StyleSheet} from 'react-native';
import {Colors, Fonts, Layout} from '../../../../res';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: Layout.Spacing.SM,
    backgroundColor: Colors.System.Brand,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.System.BrandSemiLight,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: 'white',
    fontSize: Fonts.Size.LG,
  },
  userContainer: {
    marginLeft: Layout.Spacing.MD,
  },
  welcomeText: {
    fontSize: Fonts.Size.REGULAR,
    fontWeight: 'bold',
    color: Colors.System.WhiteTransparent,
  },
  usernameText: {
    fontSize: Fonts.Size.LG,
    color: 'white',
  },
});
