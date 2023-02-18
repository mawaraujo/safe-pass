import { useEffect } from 'react';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getLocales } from 'react-native-localize';
import { NSettings } from '../types';
import settingsSlice from '../store/reducers/settingsSlice';

export default function useLang() {
  const dispatch = useDispatch();
  const settingsState = useSelector((state: RootState) => state.settings);

  const setLanguage = (locales: string) => {
    switch (locales) {
      case NSettings.AvailableLanguages.en:
        return dispatch(
            settingsSlice
                .actions
                .setLanguage({ language: NSettings.AvailableLanguages.en }),
        );

      case NSettings.AvailableLanguages.es:
        return dispatch(
            settingsSlice
                .actions
                .setLanguage({ language: NSettings.AvailableLanguages.es }),
        );

      default: break;
    }
  };

  const setup = async () => {
    if (settingsState.forcedLanguage) {
      console.warn('Forced language detected', settingsState.forcedLanguage);
      return;
    }

    const locales: string = getLocales()[0]?.languageCode;

    if (settingsState.language === locales) return;
    setLanguage(locales);
  };

  useEffect(() => {
    setup();
  }, []);
}
