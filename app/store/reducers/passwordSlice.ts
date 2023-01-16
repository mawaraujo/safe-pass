import {createSlice} from '@reduxjs/toolkit';
import {NStore, NPassword} from '../../types';

const initialState = [] as NPassword.Passwords;

export default createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    add(state, action: NStore.Action<NPassword.Password>) {
      state.unshift(
          action.payload,
      );
    },

    edit(state, action: NStore.Action<NPassword.Password>) {
      const itemIndex = state.findIndex((pass) => pass.id === action.payload.id);

      if (itemIndex !== -1) {
        state[itemIndex] = action.payload;
      }
    },

    delete(state, action: NStore.Action<NPassword.Password>) {
      const itemIndex = state.findIndex((pass) =>
        pass.id === action.payload.id);

      state.splice(itemIndex, 1);
    },
  },
});
