import React from 'react';
import { TouchableOpacity } from 'react-native';
import CardBase from '../base/base';
import Text from '../../text/text';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface Props {
  title: string,
  description?: string,
  children: React.ReactNode
}

export default function CardAccordion({ title, description, children }: Props) {
  const [display, setDisplay] = React.useState<boolean>(false);
  const height = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      maxHeight: height.value > 0 ? 'auto' : 0,
    };
  });

  const handleAnimate = () => {
    height.value = withTiming(display ? 1 : 0, {
      duration: 500,
    });
  };

  const toggle = React.useCallback(() => setDisplay(!display), [display]);

  React.useEffect(() => {
    handleAnimate();
  }, [display]);

  return (
    <CardBase>
      <TouchableOpacity onPress={toggle}>
        <Text size="3">{title}</Text>

        {
          description &&
          <Text muted>{description && description}</Text>
        }
      </TouchableOpacity>

      <Animated.View style={animatedStyles}>
        { children && children }
      </Animated.View>
    </CardBase>
  );
}
