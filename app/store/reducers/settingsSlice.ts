import {createSlice} from '@reduxjs/toolkit';
import {NStore, NSettings} from '../../types';

const initialState: NSettings.AvailableOptions = {
  enableLocalAuthentication: true,
};

export default createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggle(state, action: NStore.Action<NSettings.ToggleAction>) {
      if (action.payload.enableLocalAuthentication) {
        state.enableLocalAuthentication = action.payload.enableLocalAuthentication;
      }
    },
  },
});
