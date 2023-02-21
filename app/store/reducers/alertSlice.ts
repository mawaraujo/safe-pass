import { createSlice } from '@reduxjs/toolkit';
import { NStore, NAlert } from '../../types';

const initialState: NAlert.Alert = {
  title: '',
  extraInformation: undefined,
  type: 'Success',
  show: false,
};

export default createSlice({
  name: 'alert',
  initialState,
  reducers: {
    show(state, action: NStore.Action<NAlert.Alert>) {
      state.title = action.payload.title;
      state.extraInformation = action.payload.extraInformation;
      state.type = action.payload.type;
      state.show = true;
    },

    hide(state) {
      state.title = '';
      state.extraInformation = '';
      state.type = 'Success';
      state.show = false;
    },
  },
});
