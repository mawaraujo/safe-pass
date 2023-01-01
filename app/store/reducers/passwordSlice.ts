import {createSlice} from '@reduxjs/toolkit';
import {NStore, NPassword} from '../../types';

const initialState = [] as NPassword.Passwords;

export default createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    add(state, action: NStore.Action<NPassword.Password>) {
      state.push(
          action.payload,
      );
    },
  },
});
