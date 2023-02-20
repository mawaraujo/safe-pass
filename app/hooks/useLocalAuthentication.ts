import { useEffect, useState } from 'react';
import { LocalAuthentication } from '../modules';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useTranslation } from 'react-i18next';
import { AppState } from 'react-native';

interface UseLocalAuthentication {
  enabled: boolean,
  authorized: boolean,
  handlePrompt: () => Promise<void>
}

export default function useLocalAuthentication(): UseLocalAuthentication {
  const { t } = useTranslation();

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
          }
        });

    return () => {
      subscription.remove();
    };
  }, []);

  return {
    enabled: (settings.enableLocalAuthentication || false),
    authorized,
    handlePrompt,
  };
}
