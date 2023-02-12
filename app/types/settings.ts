/* eslint-disable no-unused-vars */

namespace NSettings {
  type EnableLocalAuthentication = boolean;

  export enum AvailableLanguages {
    es = 'es',
    en = 'en'
  }

  export interface AvailableOptions {
    enableLocalAuthentication: EnableLocalAuthentication,
    language: keyof typeof AvailableLanguages,
  }

  export interface ToggleAction {
    enableLocalAuthentication?: EnableLocalAuthentication,
    language?: keyof typeof AvailableLanguages,
  }
}

export default NSettings;
