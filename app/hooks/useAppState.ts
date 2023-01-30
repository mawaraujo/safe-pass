import {useEffect, useState} from 'react';
import {AppState} from 'react-native';

interface UseAppState {
  isActive: boolean
}

export default function useAppState(): UseAppState {
  const [isActive, setIsActive] = useState<boolean>(AppState.currentState === 'active');

  useEffect(() => {
    const subscription = AppState
        .addEventListener('change', (nextAppState) => {
          if (nextAppState === 'active') {
            setIsActive(true);
            return;
          }

          setIsActive(false);

        });

    return () => {
      subscription.remove();
    };
  }, []);

  return {
    isActive,
  };
}
