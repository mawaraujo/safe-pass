import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import CardBase from '../base/base';
import Text from '../../text/text';
import Animated, { interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts, Layout } from '../../../res';
import styles from './accordion.styles';

interface Props {
  title: string,
  description?: string,
  children: React.ReactNode
}

const GENERIC_INTERPOLATION_VALUES: Array<number> = [0, 1];
const ANIM_DURATION: number = 500;

export default function CardAccordion({ title, description, children }: Props) {

  const [show, setShow] = React.useState<boolean>(false);
  const computedShow: number = (show ? 1 : 0);

  const interpolatedMarginTop = interpolate(
      computedShow,
      GENERIC_INTERPOLATION_VALUES,
      [0, Layout.Spacing.MD],
  );

  const interpolatedOpacity = interpolate(
      computedShow,
      GENERIC_INTERPOLATION_VALUES,
      [0, 1],
  );

  const interpolatedHeight = interpolate(
      computedShow,
      GENERIC_INTERPOLATION_VALUES,
      [0, 100],
  );

  const interpolatedArrow = interpolate(
      computedShow,
      GENERIC_INTERPOLATION_VALUES,
      [0, 180],
  );

  const animatedMainStyles = useAnimatedStyle(() => {
    return {
      maxHeight: withTiming(`${interpolatedHeight}%`, {
        duration: ANIM_DURATION,
      }),
      opacity: withTiming(interpolatedOpacity, {
        duration: ANIM_DURATION,
      }),
      marginTop: withTiming(interpolatedMarginTop, {
        duration: ANIM_DURATION,
      }),
    };
  });

  const animatedArrowStyles = useAnimatedStyle(() => {
    return {
      transform: [{
        rotateX: withTiming(`${interpolatedArrow}deg`, {
          duration: ANIM_DURATION,
        }),
      }],
    };
  });

  return (
    <CardBase>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setShow(!show)}>
        <View id="left-container">
          <Text size="3">{title}</Text>

          {
            description &&
            <Text muted>{description && description}</Text>
          }
        </View>

        <Animated.View style={animatedArrowStyles}>
          <Icon
            name="chevron-down-outline"
            size={Fonts.Size.Icon}
            color={Colors.System.Brand} />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={animatedMainStyles}>
        {
          show && (
            children && children
          )
        }
      </Animated.View>
    </CardBase>
  );
}
