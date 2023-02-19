import { createSlice } from '@reduxjs/toolkit';
import { NStore } from '../../types';

const initialState: Array<string> = [];

export default createSlice({
  name: 'log',
  initialState,
  reducers: {
    create(state, action: NStore.Action<any>) {
      state.unshift(
          JSON.stringify(
              action.payload,
          ),
      );
    },
  },
});
