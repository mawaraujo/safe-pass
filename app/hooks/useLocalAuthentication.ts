import { useEffect, useState } from 'react';
import useAppState from './useAppState';
import { LocalAuthentication } from '../modules';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import settingsSlice from '../store/reducers/settingsSlice';
import toastSlice from '../store/reducers/toastSlice';
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
    if (authorized) {
      return;
    }

    if (Platform.OS !== 'android') {
      console.warn('the local authentication module is not available on another OS than Android');
      return;
    }

    try {
      const response = await LocalAuthentication.authenticate({
        promptTitle: 'Local authentication',
      });

      setAuthorized(response.success);

    } catch (error) {
      if (Env.isDevMode()) {
        dispatch(logSlice.actions.create(error));
      }

      dispatch(
          toastSlice.actions.show({
            title: t('The device unlock system is not enabled'),
            type: 'Danger',
          }),
      );

      dispatch(
          settingsSlice
              .actions
              .toggleLocalAuthentication(),
      );
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
