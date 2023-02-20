import { useEffect, useRef, useState } from 'react';
import { LocalAuthentication } from '../modules';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useTranslation } from 'react-i18next';
import { AppState } from 'react-native';
import { AppStateStatus } from 'react-native';

interface UseLocalAuthentication {
  enabled: boolean,
  authorized: boolean,
  handlePrompt: () => Promise<void>,
  isFocused: boolean,
}

export default function useLocalAuthentication(): UseLocalAuthentication {
  const { t } = useTranslation();

  const appState = useRef<AppStateStatus>(AppState.currentState);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const settings = useSelector((state: RootState) => state.settings);

  const handlePrompt = async () => {
    if (authorized) return;

    try {
      const response = await LocalAuthentication.authenticate({
        promptTitle: t('Unlock') ?? 'Unlock',
      });

      setAuthorized(response.success);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePrompt();

    const subscription = AppState
        .addEventListener('change', (nextAppState) => {

          if (nextAppState !== 'active') {
            setAuthorized(false);
            setIsFocused(false);
            appState.current = nextAppState;
            return;
          }

          setIsFocused(true);
          appState.current = nextAppState;
        });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (isFocused === true) {
      handlePrompt();
    }
  }, [isFocused]);

  return {
    enabled: (settings.enableLocalAuthentication || false),
    authorized,
    handlePrompt,
    isFocused,
  };
}
