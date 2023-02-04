import React from 'react';
import {View, Text, Animated, TouchableOpacity, Dimensions} from 'react-native';
import toastStyles from './toast.styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {Colors} from '../../res';
import Icon from 'react-native-vector-icons/Ionicons';
import useToast from '../../hooks/useToast';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const INITIAL_VALUE = (-WINDOW_HEIGHT * 2);

export default function Toast() {
  const {hide} = useToast();

  const toastValue = useSelector((state: RootState) => state.toast);
  const toastColor = Colors.System[toastValue.type];

  const popAnim = React.useRef(new Animated.Value(INITIAL_VALUE)).current;

  const popIn = () => {
    Animated.spring(popAnim, {
      toValue: 0,
      useNativeDriver: true,
      damping: 18,
    }).start(() => {
      popOut();
    });
  };

  const popOut = () => {
    setTimeout(() => {
      instantPopOut();
    }, 5000);
  };

  const instantPopOut = () => {
    Animated.timing(popAnim, {
      toValue: INITIAL_VALUE,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      hide();
    });
  };

  React.useEffect(() => {
    if (toastValue.show) {
      popIn();
    }
  }, [toastValue]);

  if (!toastValue.show) {
    return (
      null
    );
  }

  return (
    <Animated.View
      style={[
        toastStyles.toastContainer,
        {
          transform: [{
            translateY: popAnim,
          }],
        },
      ]}>
      <View
        style={[
          toastStyles.toast,
          {
            backgroundColor: toastColor,
          },
        ]}>

        <View style={toastStyles.leftContainer}>
          <View>
            <Text
              style={toastStyles.toastTitle}>
              {toastValue.title}
            </Text>

            {
              toastValue.extraInformation && (
                <Text
                  style={toastStyles.toastExtraInformation}>
                  {toastValue.extraInformation}
                </Text>
              )
            }
          </View>
        </View>

        <TouchableOpacity
          onPress={instantPopOut}
          style={toastStyles.rightContainer}>

          <Icon
            name="close-outline"
            size={20}
            color={Colors.System.White} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}
