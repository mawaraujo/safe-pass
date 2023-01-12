import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useRef} from 'react';

export default function useScrollToTop(animated: boolean = false) {
  const scrollRef = useRef<any>();

  useFocusEffect(
      useCallback(() => {
        scrollRef.current?.scrollTo({
          y: 0,
          animated,
        });
      }, []),
  );

  return {
    scrollRef,
  };
}
