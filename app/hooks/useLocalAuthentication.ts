import {useEffect, useState} from 'react';
import useAppState from './useAppState';
import {LocalAuthentication} from '../modules';
import {Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

interface UseLocalAuthentication {
  authorized: boolean
}

export default function useLocalAuthentication(): UseLocalAuthentication {
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
      console.log(error);
    }
  };

  useEffect(() => {
    if (appState.isActive) {
      if (settings.enableLocalAuthentication) {
        handlePrompt();
      }

    } else {
      setAuthorized(false);
    }
  }, [appState]);

  return {
    authorized,
  };
}
