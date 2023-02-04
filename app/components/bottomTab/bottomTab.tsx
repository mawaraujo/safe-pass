import React from 'react';
import {Keyboard, View} from 'react-native';
import bottomTabStyles from './bottomTab.styles';
import {Screens, Colors} from '../../res';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {Navigation} from '../../utils';
import {useRoute} from '@react-navigation/native';

export default function BottomTab() {
  const [hide, setHide] = React.useState<boolean>(false);
  const route = useRoute();

  const isFocused = React.useCallback((screenName: string): boolean => {
    return (
      route.name === screenName
    );
  }, [route.name]);

  React.useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setHide(true);
    });

    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setHide(false);
    });

    return () => {
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  return (
    <View
      style={[
        hide && bottomTabStyles.hide,
      ]}>

      <View style={bottomTabStyles.container}>
        <TouchableOpacity
          onPress={() => {
            Navigation.navigate(Screens.main.name);
          }}>

          <Icon
            name={
              isFocused(Screens.main.name)
                ? Screens.main.iconFocused
                : Screens.main.icon
            }
            size={28}
            color={Colors.System.Brand} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            bottomTabStyles.buttonContainer,
            bottomTabStyles.buttonActive,
          ]}
          onPress={() => {
            Navigation.navigate(Screens.createPassword.name);
          }}>

          <Icon
            name={Screens.createPassword.icon}
            size={28}
            color={Colors.System.White} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Navigation.navigate(Screens.settings.name);
          }}>

          <Icon
            name={
              isFocused(Screens.settings.name)
                ? Screens.settings.iconFocused
                : Screens.settings.icon
            }
            size={28}
            color={Colors.System.Brand} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
