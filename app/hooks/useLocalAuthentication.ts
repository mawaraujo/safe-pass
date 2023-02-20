import { useEffect, useState } from 'react';
import useAppState from './useAppState';
import { LocalAuthentication } from '../modules';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import logSlice from '../store/reducers/logSlice';
import { Env } from '../utils';
import { useTranslation } from 'react-i18next';

interface UseLocalAuthentication {
  enabled: boolean,
  authorized: boolean,
  handlePrompt: () => Promise<void>
}

export default function useLocalAuthentication(): UseLocalAuthentication {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [authorized, setAuthorized] = useState<boolean>(false);
  const appState = useAppState();

  const settings = useSelector((state: RootState) => state.settings);

  const handlePrompt = async () => {
    if (authorized) return;

    try {
      const response = await LocalAuthentication.authenticate({
        promptTitle: t('Unlock') ?? 'Unlock',
      });

      setAuthorized(response.success);

    } catch (error) {
      console.error(error);

      if (Env.isDevMode()) {
        dispatch(logSlice.actions.create(error));
      }
    }
  };

  useEffect(() => {
    if (appState.isActive) {
      if (settings.enableLocalAuthentication) {
        setTimeout(() => {
          handlePrompt();
        }, 0);
      }

    } else {
      setAuthorized(false);
    }
  }, [appState]);

  return {
    enabled: (settings.enableLocalAuthentication || false),
    authorized,
    handlePrompt,
  };
}
