import { createSlice } from '@reduxjs/toolkit';
import { NSettings, NStore } from '../../types';

const initialState: NSettings.AvailableOptions = {
  enableLocalAuthentication: false,
  language: 'en',
};

export default createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleLocalAuthentication(state) {
      state.enableLocalAuthentication = !state.enableLocalAuthentication;
    },
    selectLanguage(state, action: NStore.Action<keyof typeof NSettings.AvailableLanguages>) {
      state.language = action.payload;
    },
  },
});
