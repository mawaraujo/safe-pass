/* eslint-disable no-unused-vars */

namespace NSettings {
  type EnableLocalAuthentication = boolean;

  export enum AvailableLanguages {
    es = 'es',
    en = 'en',
  }

  export interface State {
    enableLocalAuthentication?: EnableLocalAuthentication,
    language?: keyof typeof AvailableLanguages,
    forcedLanguage?: boolean,
  }

  export interface LanguageAction {
    language: keyof typeof AvailableLanguages,
    forcedLanguage?: boolean,
  }
}

export default NSettings;
