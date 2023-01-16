import {createSlice} from '@reduxjs/toolkit';
import {NStore, NToast} from '../../types';

const initialState: NToast.Toast = {
  title: '',
  extraInformation: undefined,
  type: 'Success',
  show: false,
};

export default createSlice({
  name: 'toast',
  initialState,
  reducers: {
    show(state, action: NStore.Action<NToast.Toast>) {
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
