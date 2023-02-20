import { useEffect, useState } from 'react';
import { LocalAuthentication } from '../modules';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useTranslation } from 'react-i18next';
import { AppState } from 'react-native';

interface UseLocalAuthentication {
  enabled: boolean,
  authorized: boolean,
  handlePrompt: () => Promise<void>,
  isFocused: boolean,
}

export default function useLocalAuthentication(): UseLocalAuthentication {
  const { t } = useTranslation();

  const [
    isFocused,
    setIsFocused
  ] = useState<boolean>(false);

  const [
    authorized,
    setAuthorized
  ] = useState<boolean>(false);

  const settings = useSelector((state: RootState) => state.settings);

  const handlePrompt = async () => {
    if(!settings.enableLocalAuthentication) return;
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
    setIsFocused(true);

    const subscription = AppState
        .addEventListener('change', (nextAppState) => {

          if (nextAppState !== 'active') {
            setAuthorized(false);
            setIsFocused(false);
            return;
          }

          setIsFocused(true);
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
