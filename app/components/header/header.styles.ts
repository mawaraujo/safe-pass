import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../res';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 10,
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
    marginLeft: 20,
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
