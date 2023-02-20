import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';
import { Storage } from '../utils';
import { Storage as StorageRes } from '../res';
import { NLang } from '../types';

import es from './translations/es.json';
import en from './translations/en.json';

async function onStart(): Promise<void> {
  const result = await Storage.get(StorageRes.Keys.Language);
  if (!result) {
    return;
  }

  /**
   * If the language is forced, we change it
   */
  const language: NLang.Options = JSON.parse(result);

  if (language.forced) {
    i18n.changeLanguage(language.language);
  }
}

i18n
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      resources: {
        es,
        en,
      },
      fallbackLng: NLang.AvailableLanguages.En,
      lng: getLocales()[0].languageCode,
      interpolation: {
        escapeValue: false,
      },
    }, onStart);

export default i18n;
