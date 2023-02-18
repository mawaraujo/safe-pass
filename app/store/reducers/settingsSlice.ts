import { createSlice } from '@reduxjs/toolkit';
import { NSettings, NStore } from '../../types';

const initialState: NSettings.State = {
  enableLocalAuthentication: false,
  language: 'en',
  forcedLanguage: false,
};

export default createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleLocalAuthentication(state) {
      state.enableLocalAuthentication = !state.enableLocalAuthentication;
    },
    setLanguage(state, action: NStore.Action<NSettings.LanguageAction>) {
      state.language = action.payload.language;

      if (action.payload.forcedLanguage) {
        state.forcedLanguage = action.payload.forcedLanguage;
      }
    },
  },
});
